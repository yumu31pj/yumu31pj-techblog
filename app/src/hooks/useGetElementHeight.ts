import React, { useState } from "react";

export const useGetElementHeight = (ref: React.RefObject<HTMLElement | null>) => {
  const [height, setHeight] = useState<number>(0);

  React.useEffect(() => {
    if (ref.current) {
      const handleResize = () => {
        const newHeight = ref.current?.offsetHeight;
        if (typeof newHeight === 'number') {
          setHeight(newHeight);
        }
      };

      // Set initial height
      handleResize();

      // Add resize event listener
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [ref]);

  return height;
}