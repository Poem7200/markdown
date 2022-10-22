import React, { useEffect, useState } from "react";

const useKeyPress = (targetKeyCode: number) => {
  const [keyPressed, setKeyPressed] = useState(false)

  const keyDownHandler = (e: KeyboardEvent) => {
    const { keyCode } = e
    if (keyCode === targetKeyCode) {
      setKeyPressed(true)
    }
  }

  const keyUpHandler = (e: KeyboardEvent) => {
    const { keyCode } = e
    if (keyCode === targetKeyCode) {
      setKeyPressed(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler)
    document.addEventListener('keyup', keyUpHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
      document.removeEventListener('keyup', keyUpHandler)
    }
  }, [])
  
  return keyPressed
}

export default useKeyPress
