import { useState, useRef, useEffect } from 'react';
import './Folder.css';

const darkenColor = (hex, percent) => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split('')
      .map(c => c + c)
      .join('');
  }
  const num = parseInt(color, 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const Folder = ({ color = '#5227FF', size = 1, items = [], className = '', label = '' }) => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [open, setOpen] = useState(false);
  const backRef = useRef(null);
  const labelRef = useRef(null);
  const [paperOffsets, setPaperOffsets] = useState(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor('#ffffff', 0.1);
  const paper2 = darkenColor('#ffffff', 0.05);
  const paper3 = '#ffffff';

  const handleClick = () => {
    setOpen(prev => !prev);
    if (open) {
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
    }
  };

  const handlePaperMouseMove = (e, index) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (e, index) => {
    setPaperOffsets(prev => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle = {
    '--folder-color': color,
    '--folder-back-color': folderBackColor,
    '--paper-1': paper1,
    '--paper-2': paper2,
    '--paper-3': paper3
  };

  const folderClassName = `folder ${open ? 'open' : ''}`.trim();
  const scaleStyle = { transform: `scale(${size})` };

  useEffect(() => {
    const adjust = () => {
      const labelEl = labelRef.current;
      const backEl = backRef.current;
      if (!labelEl || !backEl) return;

      const backRect = backEl.getBoundingClientRect();
      const paddingHorizontal = 20; // internal padding in label CSS
      const paddingVertical = 20;
      const labelWidth = Math.max(20, backRect.width * 0.6 - paddingHorizontal);
      const labelHeight = Math.max(20, backRect.height - paddingVertical);

      const maxFont = Math.min(48, Math.floor(backRect.height * 0.6));
      const minFont = 8;

      labelEl.style.whiteSpace = 'normal';
      labelEl.style.display = 'block';
      labelEl.style.width = labelWidth + 'px';
      labelEl.style.height = labelHeight + 'px';
      labelEl.style.lineHeight = '1.05';

      // Start from a large font and reduce until text fits within label box
      let fontSize = maxFont;
      labelEl.style.fontSize = fontSize + 'px';
      // Use a loop cap to avoid infinite loops
      while (fontSize > minFont) {
        const { scrollWidth, scrollHeight } = labelEl;
        if (scrollWidth <= labelWidth && scrollHeight <= labelHeight) break;
        fontSize -= 1;
        labelEl.style.fontSize = fontSize + 'px';
      }
    };

    adjust();
    const ro = new ResizeObserver(adjust);
    if (backRef.current) ro.observe(backRef.current);
    window.addEventListener('resize', adjust);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', adjust);
    };
  }, [label]);

  return (
    <div style={scaleStyle} className={className}>
      <div className={folderClassName} style={folderStyle} onClick={handleClick}>
        <div className="folder__back" ref={backRef}>
          {papers.map((item, i) => (
            <div
              key={i}
              className={`paper paper-${i + 1}`}
              onMouseMove={e => handlePaperMouseMove(e, i)}
              onMouseLeave={e => handlePaperMouseLeave(e, i)}
              style={
                open
                  ? {
                      '--magnet-x': `${paperOffsets[i]?.x || 0}px`,
                      '--magnet-y': `${paperOffsets[i]?.y || 0}px`
                    }
                  : {}
              }
            >
              {item}
            </div>
          ))}
          <div className="folder__front"></div>
          <div className="folder__front right"></div>
          {label ? <div className="folder__label" ref={labelRef}>{label}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default Folder;
