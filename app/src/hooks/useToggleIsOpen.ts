"use client";

import { useCallback, useState } from "react";

const useToggleIsOpen = (initialState: boolean = false): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleIsOpen = useCallback(() => {
    setIsOpen((previousState) => !previousState)
  },[]);

  return [
    isOpen,
    toggleIsOpen
  ]
}

export default useToggleIsOpen;