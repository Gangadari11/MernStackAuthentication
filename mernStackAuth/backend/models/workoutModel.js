const mongoose = require('mongoose');
//Allow us to create a schema for monogodb.Mongo alone is schema less


const Schema =  mongoose.Schema

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
 } , {timestamps:true}
)

module.exports = mongoose.model('Workout', workoutSchema);
//This line creates a model named Workout based on the schema you defined (workoutSchema).
//A Mongoose model represents a collection in MongoDB and provides methods to interact with the data in that collection.
//Workout will be the name of the collection, and Mongoose will automatically pluralize it to workouts (unless overridden).