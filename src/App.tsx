import React from 'react';
import './App.css';
import Songs from './songs/Songs';

function App(props:any) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, {props.name}
        </p>   
        <Songs/>     
      </header>
    </div>
  );
}

export default App;
