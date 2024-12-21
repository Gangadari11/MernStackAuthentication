import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//This line grabs the styles from the index.css file and applies them to your app.

import App from './App';
//You bring in the App component, 
//which is the main component of your app,
//The App is what holds all the pages and features of your application.

import {WorkoutsContextProvider} from './context/WorkoutContext';



//This line imports the WorkoutsContextProvider component from the context folder.
//The WorkoutsContextProvider is a component that provides the WorkoutsContext to all of its children components.
//The WorkoutsContext is a context object that contains the state and functions related to the workouts in your app.
const root = ReactDOM.createRoot(document.getElementById('root'));
//// This finds the HTML element with the ID `root` in your `index.html` file and prepares it 
// so React can insert the app into this element.

root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
    
  </React.StrictMode>
);
// This runs your app by displaying the `App` component inside the HTML element with the ID `root`.
// `React.StrictMode` helps catch errors and gives warnings about potential problems in your code.

