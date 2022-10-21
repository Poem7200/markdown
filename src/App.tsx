import React from 'react';
import FileSearch from './components/FileSearch';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="App container-fluid">
      <div className='row'>
        <div className='col-3 left-panel'>
          <FileSearch title='我的云文档' onFileSearch={() => {}} />
        </div>
        <div className='col-9 bg-primary right-panel'>
          <h1>right part</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
