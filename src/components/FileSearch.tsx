import React, { FC, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import useKeyPress from '../hooks/useKeyPress'

interface FileSearchProps {
  title: string;
  onFileSearch?: (value: string) => void;
}

const FileSearch: FC<FileSearchProps> = (props: FileSearchProps) => {
  const { title, onFileSearch } = props;
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('')
  let node = useRef(null)
  
  const enterPressed = useKeyPress(13)
  const escPressed = useKeyPress(27)
  
  const closeSearch = () => {
    setActive(false)
    setValue('')
  }
  
  useEffect(() => {
    enterPressed && active && onFileSearch && onFileSearch(value)
    escPressed && active && closeSearch()
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
          <button className="icon-button" type="button" onClick={() => setActive(true)}>
            <FontAwesomeIcon title='搜索' icon={faSearch} />
          </button>
        </div>
      }
      {
        active &&
        <div className="d-flex justify-content-between align-items-center">
          <input className="form-control" ref={node} style={{ width: '300px' }} value={value} onChange={e => setValue(e.target.value)} />
          <button className="icon-button" type="button" onClick={closeSearch}>
            <FontAwesomeIcon title='关闭' icon={faTimes} />
          </button>
        </div>
      }
    </div>
  )
}

export default FileSearch
