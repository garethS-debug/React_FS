'use client';

import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import './RotatingText.css';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const RotatingText = forwardRef((props, ref) => {

  console.log('RotatingText mounted, props texts:', props.texts && props.texts.slice(0,4));
  const {
    texts,
    transition = { type: 'spring', damping: 25, stiffness: 300 },
    initial = { y: '100%', opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: '-120%', opacity: 0 },
    animatePresenceMode = 'wait',
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0,
    staggerFrom = 'first',
    loop = true,
    auto = true,
    splitBy = 'characters',
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const pillRef = useRef(null);
  const rootRef = useRef(null);
  const [pillWidth, setPillWidth] = useState(null);

  useLayoutEffect(() => {
    if (!texts || !texts.length) return;
    (async () => {
      if (document.fonts && document.fonts.ready) await document.fonts.ready;


      const measuringContainer = document.createElement('div');
      measuringContainer.style.position = 'absolute';
      measuringContainer.style.left = '-9999px';
      measuringContainer.style.top = '-9999px';
      measuringContainer.style.visibility = 'hidden';
      document.body.appendChild(measuringContainer);

      let maxW = 0;
      let maxLineW = 0;
      const parent = rootRef.current && rootRef.current.parentElement;
      const beforeText = parent ? (parent.querySelector('.rotating-before')?.textContent || '') : '';

      texts.forEach(t => {

        const words = (t || '').split(' ');
        const pillText = words[1] || words[0] || '';
        const span = document.createElement('span');
        span.className = 'text-rotate-word pill-style';
        span.textContent = pillText;
        measuringContainer.appendChild(span);
        const w = Math.ceil(span.scrollWidth);
        if (w > maxW) maxW = w;


        const wrapper = document.createElement('span');
        wrapper.className = 'rotating-line';
        const before = document.createElement('span');
        before.className = 'rotating-before';
        before.textContent = beforeText;
        const hero = document.createElement('span');
        hero.className = mainClassName || 'rotating-hero';
        hero.textContent = t;
        wrapper.appendChild(before);
        wrapper.appendChild(hero);
        measuringContainer.appendChild(wrapper);
        const lw = Math.ceil(wrapper.scrollWidth);
        if (lw > maxLineW) maxLineW = lw;
      });

      document.body.removeChild(measuringContainer);
      setPillWidth(maxW);


      if (parent) {
        parent.style.setProperty('--rotating-line-width', `${maxLineW}px`);

        parent.style.minWidth = `${maxLineW}px`;
        parent.style.width = `${maxLineW}px`;
      }

      // Position the rotating text absolutely within the parent `.rotating-line`
      // so the pill can change size without affecting document flow.
      const rootEl = rootRef.current;
      const parentEl = rootEl && rootEl.parentElement;
      if (parentEl) {
        // measure the static "before" text if present and set a CSS variable
        const beforeEl = parentEl.querySelector('.rotating-before');
        const beforeW = beforeEl ? Math.ceil(beforeEl.getBoundingClientRect().width) : 0;
        parentEl.style.setProperty('--rotating-before-width', `${beforeW}px`);
      }
      if (rootEl) {
        rootEl.style.position = 'absolute';
        rootEl.style.left = 'var(--rotating-before-width, 0px)';
        rootEl.style.top = '0';
      }
    })();
  }, [texts, mainClassName]);

  const splitIntoCharacters = text => {
    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
      return Array.from(segmenter.segment(text), segment => segment.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    if (splitBy === 'characters') {
      const words = currentText.split(' ');
      return words.map((word, i) => ({
        characters: splitIntoCharacters(word),
        needsSpace: i !== words.length - 1
      }));
    }
    if (splitBy === 'words') {
      return currentText.split(' ').map((word, i, arr) => ({
        characters: [word],
        needsSpace: i !== arr.length - 1
      }));
    }
    if (splitBy === 'lines') {
      return currentText.split('\n').map((line, i, arr) => ({
        characters: [line],
        needsSpace: i !== arr.length - 1
      }));
    }

    return currentText.split(splitBy).map((part, i, arr) => ({
      characters: [part],
      needsSpace: i !== arr.length - 1
    }));
  }, [texts, currentTextIndex, splitBy]);

  const getStaggerDelay = useCallback(
    (index, totalChars) => {
      const total = totalChars;
      if (staggerFrom === 'first') return index * staggerDuration;
      if (staggerFrom === 'last') return (total - 1 - index) * staggerDuration;
      if (staggerFrom === 'center') {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === 'random') {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      return Math.abs(staggerFrom - index) * staggerDuration;
    },
    [staggerFrom, staggerDuration]
  );

  const handleIndexChange = useCallback(
    newIndex => {
      setCurrentTextIndex(newIndex);
      if (onNext) onNext(newIndex);
    },
    [onNext]
  );

  const next = useCallback(() => {
    const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
    if (nextIndex !== currentTextIndex) {
      handleIndexChange(nextIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const previous = useCallback(() => {
    const prevIndex = currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1;
    if (prevIndex !== currentTextIndex) {
      handleIndexChange(prevIndex);
    }
  }, [currentTextIndex, texts.length, loop, handleIndexChange]);

  const jumpTo = useCallback(
    index => {
      const validIndex = Math.max(0, Math.min(index, texts.length - 1));
      if (validIndex !== currentTextIndex) {
        handleIndexChange(validIndex);
      }
    },
    [texts.length, currentTextIndex, handleIndexChange]
  );

  const reset = useCallback(() => {
    if (currentTextIndex !== 0) {
      handleIndexChange(0);
    }
  }, [currentTextIndex, handleIndexChange]);

  useImperativeHandle(
    ref,
    () => ({
      next,
      previous,
      jumpTo,
      reset
    }),
    [next, previous, jumpTo, reset]
  );

  useEffect(() => {
    if (!auto) return;
    const intervalId = setInterval(next, rotationInterval);
    return () => clearInterval(intervalId);
  }, [next, rotationInterval, auto]);

  return (
    <motion.span ref={rootRef} className={cn('text-rotate', mainClassName)} {...rest} layout transition={transition}>
      <span className="text-rotate-sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.span
          key={currentTextIndex}
          className={cn(splitBy === 'lines' ? 'text-rotate-lines' : 'text-rotate')}
          layout
          aria-hidden="true"
        >
          {elements.map((wordObj, wordIndex, array) => {
            const previousCharsCount = array.slice(0, wordIndex).reduce((sum, word) => sum + word.characters.length, 0);
            return (
              <span
                key={wordIndex}
                ref={wordIndex === 1 ? pillRef : undefined}
                style={wordIndex === 1 && pillWidth ? { width: `${pillWidth}px` } : undefined}
                className={cn('text-rotate-word', splitLevelClassName)}
              >
                {wordObj.characters.map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={initial}
                    animate={animate}
                    exit={exit}
                    transition={{
                      ...transition,
                      delay: getStaggerDelay(
                        previousCharsCount + charIndex,
                        array.reduce((sum, word) => sum + word.characters.length, 0)
                      )
                    }}
                    className={cn('text-rotate-element', elementLevelClassName)}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordObj.needsSpace && <span className="text-rotate-space"> </span>}
              </span>
            );
          })}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = 'RotatingText';
export default RotatingText;
