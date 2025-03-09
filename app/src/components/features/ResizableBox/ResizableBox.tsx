'use client';

import { useEffect, useRef, useState } from "react";
import styles from "./ResizableBox.module.scss";

const ResizableBox = ({children}: {children: React.ReactNode}) => {

  const boxRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!boxRef.current) {
      console.error("boxRef is not set");
      return;
    }

    const handleResize = () => {
      if (boxRef.current) {
        const { offsetWidth, offsetHeight } = boxRef.current;
        setSize({ width: offsetWidth, height: offsetHeight });
      }
    };

    const observer = new ResizeObserver(() => {
      handleResize();
    });

    observer.observe(boxRef.current);

    handleResize();

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={boxRef} className={styles["resizable-box"]}>
      <div className={styles["size-indicator"]}>
        {size.width}px × {size.height}px
      </div>
      {children}
    </div>
  );
};

export default ResizableBox;
