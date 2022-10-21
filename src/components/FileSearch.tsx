import React, { FC, useState } from "react";

interface FileSearchProps {
  title: string;
  onFileSearch?: (value: string) => void;
}

const FileSearch: FC<FileSearchProps> = (props: FileSearchProps) => {
  const { title, onFileSearch } = props;
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('')
  
  const handleInputEvent = (e: KeyboardEvent) => {
    const { keyCode } = e
    if (keyCode === 13 && active) {
      onFileSearch && onFileSearch(value)
    }
    else if (keyCode === 27 && active) {
      // closeSearch()
    }
  }
  
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
        <div className="row">
          <input className="form-control col-8" value={value} onChange={e => setValue(e.target.value)} />
          <button className="btn btn-primary col-4" type="button" onClick={() => setActive(false)}>关闭</button>
        </div>
      }
    </div>
  )
}

export default FileSearch
