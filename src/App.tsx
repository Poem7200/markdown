import React from 'react';
import { faPlus, faFileImport } from '@fortawesome/free-solid-svg-icons'
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import BottomButton from './components/BottomButton';
import TabList from './components/TabList';
import SimpleMDE from 'react-simplemde-editor';
import { defaultFiles } from './utils/defaultFiles';
import 'bootstrap/dist/css/bootstrap.min.css';
import "easymde/dist/easymde.min.css"
import './App.css';

const App = () => {
  return (
    <div className="App container-fluid px-0">
      <div className='row'>
        <div className='col-3 left-panel'>
          <FileSearch title='我的云文档' onFileSearch={() => {}} />
          <FileList
            files={defaultFiles}
            onFileClick={(id: string) => { console.log('click', id) }}
            onFileDelete={(id: string) => { console.log('delete', id) }}
            onSaveEdit={(id: string, value: string) => { console.log('edit', id, value) }}
          />
          <div className='row no-gutters'>
            <div className='col-6'>
              <BottomButton title='新建' color='btn-primary' icon={faPlus} />
            </div>
            <div className='col-6'>
              <BottomButton title='上传' color='btn-success' icon={faFileImport} />
            </div>
          </div>
        </div>
        <div className='col-9 right-panel'>
          <TabList files={defaultFiles} onTabClick={(id) => console.log(id)} />
          <SimpleMDE value={defaultFiles[1].body} onChange={val => console.log(val)} />
        </div>
      </div>
    </div>
  );
}

export default App;
