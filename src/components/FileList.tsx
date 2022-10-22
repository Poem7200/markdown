import React, { FC, useEffect, useState } from "react";
import { FileItem } from '../utils/defaultFiles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';

interface FileListProps {
  files: FileItem[];
  onFileClick?: (id: string) => void;
  onSaveEdit?: (id: string, content: string) => void;
  onFileDelete?: (id: string) => void;
}

const FileList: FC<FileListProps> = (props: FileListProps) => {
  const { files, onFileClick, onFileDelete, onSaveEdit } = props;
  const [editItem, setEditItem] = useState(null as unknown as string)
  const [value, setValue] = useState('')

  const closeSearch = (e: KeyboardEvent | MouseEvent) => {
    e.preventDefault()
    setEditItem(null as unknown as string)
    setValue('')
  }

  useEffect(() => {
    const handleInputEvent = (e: KeyboardEvent) => {
      const { keyCode } = e
      if (keyCode === 13 && editItem) {
        onSaveEdit && onSaveEdit(editItem, value)
      }
      else if (keyCode === 27 && editItem) {
        closeSearch(e)
      }
    }
    document.addEventListener('keyup', handleInputEvent)
    return () => {
      document.removeEventListener('keyup', handleInputEvent)
    }
  })

  return (
    <ul className="list-group list-group-flush file-list">
      {
        files.map((file) => <li className="row list-group-item bg-light d-flex align-items-center file-item" key={file.id}>
          {
            file.id !== editItem &&
            <>
              <span className="col-2">
                <FontAwesomeIcon icon={faMarkdown} size='lg' />
              </span>
              <span className="col-7 c-link" onClick={() => onFileClick && onFileClick(file.id)}>{file.title}</span>
              <button className="icon-button col-1" type="button" onClick={() => {
                setEditItem(file.id)
                setValue(file.title)
              }}>
                <FontAwesomeIcon title='编辑' icon={faEdit} />
              </button>
              <button className="icon-button col-1" type="button" onClick={() => onFileDelete && onFileDelete(file.id)}>
                <FontAwesomeIcon title='删除' icon={faTrash} />
              </button>
            </>
          }
          {
            file.id === editItem &&
            <div className="d-flex justify-content-between align-items-center">
              <input className="form-control" style={{ width: '300px' }} value={value} onChange={e => setValue(e.target.value)} />
              <button className="icon-button" type="button" onClick={e => closeSearch(e as unknown as MouseEvent)}>
                <FontAwesomeIcon title='关闭' icon={faTimes} />
              </button>
            </div>
          }
        </li>)
      }
    </ul>
  )
}

export default FileList
