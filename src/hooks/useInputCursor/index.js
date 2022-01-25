import { useEffect, useRef, useState } from 'react'

const useInputCursor = (value) => {
  const [cursor, setCursor] = useState({ type: null, position: null })
  const inputRef = useRef()

  useEffect(() => {
    const input = inputRef.current
    const { type, position } = cursor

    if (type === 'insertText' && input.value[1] === ',') {
      input.selectionEnd = position + 1
      input.selectionStart = position + 1
      return
    }
    if (input) {
      input.selectionEnd = position
      input.selectionStart = position
    }
  }, [inputRef, cursor, value])

  return { setCursor, inputRef }
}

export default useInputCursor
