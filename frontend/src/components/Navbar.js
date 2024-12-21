import {Link} from 'react-router-dom'

//Link: This is a special tool from react-router-dom that creates clickable links in your app
//Unlike regular HTML links (<a> tags), Link doesn’t reload 
// the page. It smoothly navigates between components in a single-page application, 
// making your app faster and more seamless.

//Navbar is the name of this component. It’s a functional component that focuses solely 
// on rendering the navigation bar and providing links for navigation.

//The Outer <header> Tag:
//Acts as the "roof" of your navigation bar, containing everything inside.

//The Inner <div> with Class container:
//Like a box inside the roof, this groups the contents of 
// the navigation bar together and helps with layout styling.

//The Link Component:
//to="/": This tells the link to navigate to the home page (path /) when clicked.
//The link wraps around the <h1> tag, making the title "Workout Buddy" clickable.



const Navbar = () => {
    return(
        <header>
            <div className="container">
                <Link to ='/'>
                    <h1> Workout Buddy</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar