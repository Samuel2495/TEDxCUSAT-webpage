import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: "easeOut"
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration]);

  const formattedCount = new Intl.NumberFormat('en-IN').format(count);

  return (
    <span ref={ref} className="counter-text">
      {formattedCount}{suffix}
    </span>
  );
};

export default Counter;
