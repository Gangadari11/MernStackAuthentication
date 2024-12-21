const express = require('express');

const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController');

const workoutModel = require('../models/workoutModel');

const router = express.Router();


//express.Router() is a function provided by Express to create a modular, mini application for handling routing.
//It allows you to group routes together and export them as a separate module, making your code more organized and reusable.

//Get all workouts
router.get('/', getWorkouts)

//Client Sends a GET Request to /: For example, the client accesses http://localhost:5000/ (or whatever the base path is).
//  If this router is mounted at /api/workouts, the full URL would be http://localhost:5000/api/workouts/.

//Express Checks for a Matching Route: Express looks through the registered routes in the router to see if there is a 
// match for:

//The HTTP method (GET).
//The requested path (/).
//Route Handler is Triggered: If the route matches, the associated callback function (inside the {} brackets) is executed.


//Get a single workout
router.get('/:id' , getWorkout)

//POST a new workout
router.post('/', createWorkout )
//A POST request is made to the server at the '/' endpoint. 
// This request includes data in the req.body, which contains title, reps, and load.
//The server pulls out the title, reps, and load from req.body using object destructuring
//The server uses the Workout.create() method (from Mongoose) 
// to save this data into the MongoDB database as a new workout document.
//await ensures the server waits for the database operation to complete before continuing.
//If successful:
//The new workout document is saved in the workout variable.
//The server responds with a status code of 200 (success) and sends back the workout document as JSON.
//If there’s an error (like missing required fields or database issues):
//The catch block handles the error.
//The server responds with a status code of 400 (bad request) and sends a JSON object containing the error message:

//DELETE a  workout
router.delete('/:id',deleteWorkout)

//UPDATE a  workout
router.patch('/:id', updateWorkout)



module.exports = router
//module.exports makes the router instance available to other files when this module is imported.
//This allows the router to be used in the main server file (e.g., server.js or app.js).


