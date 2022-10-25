import React, { FC } from "react";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './TabList.scss'

interface TabListProps {
  files: {
    id: string;
    title: string;
    // content: string;
  }[];
  activeId?: string;
  unsavedIds?: string[];
  onTabClick?: (id: string) => void;
  onTabClose?: () => void;
}

const TabList: FC<TabListProps> = (props: TabListProps) => {
  const { files, activeId, onTabClick } = props
  
  const handleClick = (id: string) => {
    onTabClick && onTabClick(id);
  }

  return (
    <ul className="nav nav-pills">
      {files.map(file => {
        const fileItemClasses = classNames('nav-link', {
          'active': file.id === activeId
        })
        return (
          <li className="nav-item" key={file.id}>
            <a href="#" className={fileItemClasses} onClick={() => handleClick(file.id)}>
              {file.title}
              <span className="ml-2 close-icon">
                <FontAwesomeIcon title='关闭' icon={faTimes} />
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

TabList.defaultProps = {
  activeId: '1',
  unsavedIds: []
}

export default TabList;
