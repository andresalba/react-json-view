import './App.css';
import MockData from './MOCK_DATA.json';
import ReactJson from 'react-json-view';
import { useState } from 'react';

function App() {
  const [data] = useState(MockData);
  return (
    <div className="App">
      <ReactJson 
        src={data}
        name={false}
        quotesOnKeys={false}
        enableClipboard={() => true }
      />
    </div>
  );
}

export default App;
