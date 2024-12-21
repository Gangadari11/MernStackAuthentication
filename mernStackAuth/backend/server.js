require('dotenv').config()
//Loads environment variables from a .env file into process.env.
//process.env is a object

const express = require('express');
const  mongoose = require('mongoose');


const workoutsRoutes = require('./routes/workouts');
//Imports the router defined in ./routes/workouts.
//This file likely contains route definitions (like the one you shared earlier) for handling workout-related requests.

//express app
const app = express();
//Creates an instance of an Express application.
//This app object is used to define middleware, routes, and handle requests

//middleware
app.use(express.json());
//When a client sends a request with a JSON body (e.g., via POST, PUT, or PATCH)
//express.json() parses the body into a JavaScript object and attaches it to the req.body property.


app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
//Logs the path (req.path) and HTTP method (req.method) of every incoming request to the console. For example:

// /api/workouts GET
//Calls next() to pass control to the next middleware or route handler.
//This middleware is global and applies to all incoming requests.

//routes
app.use('/api/workouts',workoutsRoutes)
//When a request URL starts with /api/workouts, the workoutsRoutes router takes over and handles the request.
//Express checks the routes inside workoutsRoutes for a match.
//A GET request to /api/workouts/ will invoke the route handler in workoutsRoutes for /.
//A POST request to /api/workouts/add will invoke the route handler in workoutsRoutes for /add.



//Connect to db
//listen for requests
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    
    app.listen(process.env.PORT , () => {
    console.log("Connected to db & Listen on port " , process.env.PORT);
})
})
.catch((error) => {
    console.log(error);
})


