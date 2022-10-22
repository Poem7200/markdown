import React from 'react';
import FileSearch from './components/FileSearch';
import FileList from './components/FileList';
import { defaultFiles } from './utils/defaultFiles';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <div className='col-3 left-panel'>
          <FileSearch title='我的云文档' onFileSearch={() => {}} />
          <FileList
            files={defaultFiles}
            onFileClick={(id: string) => { console.log('click', id) }}
            onFileDelete={(id: string) => { console.log('delete', id) }}
            onSaveEdit={(id: string, value: string) => { console.log('edit', id, value) }}
          />
        </div>
        <div className='col-9 bg-primary right-panel'>
          <h1>right part</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
