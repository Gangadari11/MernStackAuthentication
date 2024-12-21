//Your React application is like a digital house, and this file (App.js) is the main blueprint 
// for how visitors navigate through it.

import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
 
//Imagine you want your house to have different rooms (pages), and guests (users) can move between them.
//react-router-dom is like a guide that helps users navigate between rooms.
//BrowserRouter (aliased as Router) creates the main navigation system, like the entrance to your house.
//Routes is a map that organizes all the rooms (pages) in your house.
//Route defines individual rooms and specifies which path (URL) leads to each one.



//pages and components
import Home from './pages/Home'
//Home is one of the rooms in the house where users might start (like a cozy living room).

import Navbar from './components/Navbar';
//Navbar is like a menu or signpost at the entrance, showing guests where they can go.




//App is the main room in the house, where all the other rooms connect to.
// It's like the front door, where users first enter the house.
//The App function is the contractor building the house.
//It uses the Router to direct users to different rooms (pages) in the house.
//The div with className="App" is the foundation of your house—everything else will be placed inside it.
//BrowserRouter is the main gate that opens up your house to allow users to navigate between rooms
//It wraps everything related to navigation to ensure users can move around smoothly.
//The Navbar is like a signboard that stays visible no matter which
//  room (page) users are in. It helps guide them to other parts of the house.
//path='/': This is the address (URL) for the room. '/' is the main entrance, the default path.
//element={<Home />}: This is what happens when users arrive at the main entrance. They are taken to the Home room.
//element={<Home />}: This is the content of the room. When users go to '/', they will see the Home page.
//The BrowserRouter gate is closed here, ensuring navigation is neatly set up and functioning.
//This exports the house blueprint (App) so it can be used elsewhere in your application.
//The App component is the main container for your application's pages and navigation.



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/> 
      <div className='pages'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
