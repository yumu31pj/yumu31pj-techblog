"use client";

import { useCallback, useState } from "react";

const useToggleOpen = (initialState: boolean = false): [boolean, () => void] => {
  const [isOpen, setIsOpen] = useState(initialState);

  const toggleOpen = useCallback(() => {
    setIsOpen((previousState) => !previousState)
  },[]);

  return [
    isOpen,
    toggleOpen
  ]
}

export default useToggleOpen;