import React, { useState } from 'react';
import './App.css';

function App() {
  const [colur,setcolur]=useState("aqua")
  function colurCanger(e){
 const bgcolur=e.target.innerText.toLowerCase()
 setcolur(bgcolur)
  }
  return (
    < >
     <h1>Background Colur Changer</h1>
     <div className='container' style={{backgroundColor:colur}}>
      <ul className='colur-list'>
        <li onClick={colurCanger}>Green</li>
        <li onClick={colurCanger}>Yellow</li>
        <li onClick={colurCanger}>Blue</li>
        <li onClick={colurCanger}>Pink</li>
        <li onClick={colurCanger}>Black</li>
        <li onClick={colurCanger}>Orange</li>
      </ul>
      
     </div>
    </>
  );
}

export default App;
