import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloWorld from './components/hello-world/HelloWorld';
import ComponentImagesAdvanced from './components/Component-Images-Advanced/ComponentImagesAvanced';


ReactDOM.render(
  <React.StrictMode>
    <HelloWorld name="Darwin Palma" images="Images" type='note'/>
    <ComponentImagesAdvanced/>
    {/* <App/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
