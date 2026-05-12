'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const springConfig = { stiffness: 150, damping: 20 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Check if it's a touch device
    if (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Update CSS vars on document root for other components
      document.documentElement.style.setProperty(
        '--cursor-x',
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        '--cursor-y',
        `${e.clientY}px`
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div
        style={{
          width: 600,
          height: 600,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(100,255,218,0.07) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </motion.div>
  );
}
