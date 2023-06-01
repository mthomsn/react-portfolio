import React, { useEffect, useState } from 'react';

const CursorDot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    let container = document.getElementById('main-container');

    container.addEventListener('mousemove', updateCursorPosition);

    return () => {
      container.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return <div id="cursor-dot" style={{ left: (position.x - 3), top: (position.y - 3) }}></div>;
};

export default CursorDot;
