import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle, useMemo } from 'react'
import { LayoutGroup, motion, AnimatePresence } from 'motion/react'

const DEFAULT_INITIAL = { y: '100%', opacity: 0 }
const DEFAULT_ANIMATE = { y: 0, opacity: 1 }
const DEFAULT_EXIT = { y: '-120%', opacity: 0 }

function splitByWords(text) {
  return text.split(/(\s+)/).filter(Boolean)
}

function computeStaggerDistance(i, count, staggerFrom, randomOrder) {
  if (typeof staggerFrom === 'number') return Math.abs(i - staggerFrom)
  if (staggerFrom === 'first') return i
  if (staggerFrom === 'last') return count - 1 - i
  if (staggerFrom === 'center') return Math.abs(i - Math.floor((count - 1) / 2))
  if (staggerFrom === 'random') return randomOrder.indexOf(i)
  return i
}

const TextRotate = forwardRef(function TextRotate(
  {
    texts = [],
    as: As = 'p',
    initial = DEFAULT_INITIAL,
    animate = DEFAULT_ANIMATE,
    exit = DEFAULT_EXIT,
    rotationInterval = 2000,
    transition = { type: 'spring', damping: 25, stiffness: 300 },
    staggerDuration = 0,
    staggerFrom = 'first',
    splitBy = 'words',
    auto = true,
    loop = true,
    mainClassName = '',
    splitLevelClassName = '',
    elementLevelClassName = '',
    onNext,
    animatePresenceMode = 'wait',
    animatePresenceInitial = false,
  },
  ref
) {
  const [index, setIndex] = useState(0)
  const mounted = useRef(false)
  const autoRef = useRef(auto)

  useEffect(() => {
    autoRef.current = auto
  }, [auto])

  const randomOrder = useMemo(() => {
    const n = (texts[0] && (Array.isArray(texts[0]) ? texts[0].length : (texts[0] || '').length)) || 0
    const arr = Array.from({ length: n }, (_, i) => i)
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }, [])

  useEffect(() => {
    if (!autoRef.current) return
    if (!texts || texts.length <= 1) return
    const id = setInterval(() => {
      setIndex((i) => {
        const next = i + 1
        if (next >= texts.length) return loop ? 0 : i
        return next
      })
    }, rotationInterval)
    return () => clearInterval(id)
  }, [texts, rotationInterval, loop])

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (typeof onNext === 'function') onNext(index)
  }, [index, onNext])

  useImperativeHandle(ref, () => ({
    next() {
      setIndex((i) => (i + 1) % Math.max(1, texts.length))
    },
    previous() {
      setIndex((i) => (i - 1 + texts.length) % Math.max(1, texts.length))
    },
    jumpTo(i) {
      if (i >= 0 && i < texts.length) setIndex(i)
    },
    reset() {
      setIndex(0)
    },
  }))

  const current = texts && texts.length ? texts[index] : ''

  const segments = useMemo(() => {
    if (splitBy === 'characters') return splitByWords(current).map((w) => w.split(''))
    if (splitBy === 'lines') return current.split('\n')
    if (typeof splitBy === 'string' && splitBy !== 'words') return current.split(splitBy)
    return current.split(/\s+/)
  }, [current, splitBy])

  const count = segments.length || 0

  return (
    <LayoutGroup>
      <As className={mainClassName}>
        <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
          <motion.span key={index} style={{ display: 'inline-block' }}>
            {segments.map((seg, segIdx) => {
              const isArray = Array.isArray(seg)
              const inner = isArray ? seg : [seg]
              return (
                <span key={segIdx} className={splitLevelClassName} style={{ display: 'inline-block', overflow: 'hidden' }}>
                  {inner.map((ch, chIdx) => {
                    const flatIdx = isArray ? chIdx : segIdx
                    const distance = computeStaggerDistance(flatIdx, isArray ? inner.length : count, staggerFrom, randomOrder)
                    const delay = distance * staggerDuration
                    return (
                      <motion.span
                        key={segIdx + '-' + chIdx}
                        className={elementLevelClassName}
                        initial={Array.isArray(initial) ? initial[segIdx % initial.length] : initial}
                        animate={Array.isArray(animate) ? animate[segIdx % animate.length] : animate}
                        exit={Array.isArray(exit) ? exit[segIdx % exit.length] : exit}
                        transition={{ ...(transition || {}), delay }}
                        style={{ display: 'inline-block' }}
                      >
                        {ch}
                      </motion.span>
                    )
                  })}
                </span>
              )
            })}
          </motion.span>
        </AnimatePresence>
      </As>
    </LayoutGroup>
  )
})

export default TextRotate
