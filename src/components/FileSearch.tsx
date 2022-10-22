import React, { FC, useEffect, useRef, useState } from "react";

interface FileSearchProps {
  title: string;
  onFileSearch?: (value: string) => void;
}

const FileSearch: FC<FileSearchProps> = (props: FileSearchProps) => {
  const { title, onFileSearch } = props;
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('')
  let node = useRef(null)
  
  const closeSearch = (e: KeyboardEvent) => {
    e.preventDefault()
    setActive(false)
    setValue('')
  }
  
  useEffect(() => {
    const handleInputEvent = (e: KeyboardEvent) => {
      const { keyCode } = e
      if (keyCode === 13 && active) {
        onFileSearch && onFileSearch(value)
      }
      else if (keyCode === 27 && active) {
        closeSearch(e)
      }
    }
    document.addEventListener('keyup', handleInputEvent)
    return () => {
      document.removeEventListener('keyup', handleInputEvent)
    }
  })

  useEffect(() => {
    active && (node?.current as any)?.focus()
  }, [active])
  
  return (
    <div className="alert alert-primary">
      {
        !active &&
        <div className="d-flex justify-content-between align-items-center">
          <span>{title}</span>
          <button className="btn btn-primary" type="button" onClick={() => setActive(true)}>搜索</button>
        </div>
      }
      {
        active &&
        <div className="d-flex justify-content-between align-items-center">
          <input className="form-control" ref={node} style={{ width: '300px' }} value={value} onChange={e => setValue(e.target.value)} />
          <button className="btn btn-primary" type="button" onClick={e => closeSearch(e as any)}>关闭</button>
        </div>
      }
    </div>
  )
}

export default FileSearch
