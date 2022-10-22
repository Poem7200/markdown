import React, { FC } from "react";
import { FileItem } from '../utils/defaultFiles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';

interface FileListProps {
  files: FileItem[];
  onFileClick?: () => void;
  onSaveEdit?: () => void;
  onFileDelete?: () => void;
}

const FileList: FC<FileListProps> = (props: FileListProps) => {
  const { files } = props;

  return (
    <ul className="list-group list-group-flush file-list">
      {
        files.map((file) => <li className="row list-group-item bg-light d-flex align-items-center file-item" key={file.id}>
          <span className="col-2">
            <FontAwesomeIcon icon={faMarkdown} size='lg' />
          </span>
          <span className="col-7">{file.title}</span>
          <button className="icon-button col-1" type="button" onClick={() => {}}>
            <FontAwesomeIcon title='编辑' icon={faEdit} />
          </button>
          <button className="icon-button col-1" type="button" onClick={() => {}}>
            <FontAwesomeIcon title='删除' icon={faTrash} />
          </button>
        </li>)
      }
    </ul>
  )
}

export default FileList
