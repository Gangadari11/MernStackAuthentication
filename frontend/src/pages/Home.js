import {useEffect } from 'react'
//useEffect: This hook allows you to perform actions when the page is rendered or 
// when certain things (dependencies) change, like setting up decorations for the room.
//useState: This hook manages the page's "mood" or state, like a chalkboard where you can 
// write and update notes about what's happening in the room.

//Component
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"


//Home is the name of this room. It’s a functional component, which means 
// it behaves like a simple worker—it takes care of rendering the content and handling its logic.

//The useEffect hook here is a placeholder—it’s called but does nothing yet. Typically, it would:
//Run code when the page loads, like fetching data or logging a welcome message.
//Perform cleanup when the page is removed, like turning off lights when leaving.

//The outer <div> with the class name "home" acts as the room's 
// walls, providing a container for everything inside.

//This allows the Home component to be used in other parts of 
// the application, like making this room accessible through the main navigation system (App.js).

const Home = () => {

    const {workouts, dispatch} = useWorkoutsContext()

    useEffect(() => {

        const fetchWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS', payload: json})
            }
        }

        fetchWorkouts()
    },[])


    return (
        <div className="home">
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm/>
        </div> 
    )
}

export default Home