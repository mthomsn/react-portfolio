import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    let container = document.getElementById('main-container');

    container.addEventListener('pointermove', updateCursorPosition);

    return () => {
      container.removeEventListener('pointermove', updateCursorPosition);
    };
  }, []);

  return <div id="cursor-circle" style={{ left: (position.x - 14), top: (position.y - 15) }}></div>;
};

export default Cursor;
