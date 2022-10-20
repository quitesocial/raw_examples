import { useState, useCallback } from 'react'

export const useDropdown = (initState: boolean | undefined = false) => {
  const [isOpen, setIsOpen] = useState(initState)

  const close = useCallback(() => setIsOpen(false), [])
  const open = useCallback(() => setIsOpen(true), [])
  const toggle = () => setIsOpen(!isOpen)

  return {
    close,
    isOpen,
    open,
    toggle,
  }
}
