import React from 'react';
import ReactDOM from 'react-dom';

import './styles/normalize.css'
import './styles/index.css';

import CubeWorld from './components/CubeWorld';

// ReactDOM.render(
//   <React.StrictMode>
//     <CubeWorld bgColor='#141622' />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

document.addEventListener('gesturestart', (event) => { event.preventDefault(); }, false);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CubeWorld overflow-scroll="false" bgColor='#141622' />
  </React.StrictMode>
)