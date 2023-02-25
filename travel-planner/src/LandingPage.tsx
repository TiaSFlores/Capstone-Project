import { Link } from "react-router-dom"

function LandingPage(){
    return(
        <div className="App">
            <header className="App-header">
               Have an account? <Link to={'/login'}>Log in here!</Link>
               New to the Travel Planner? <Link to={'/register'}>Register Now!</Link>

            </header>


            <body>
                <h1>Welcome to Travel Planner</h1>
                <p1>Travel Planner is a tool for travelers that connects them with experiences in their area. Search for experiences by location or keyword to find the perfect one for you!</p1>
            </body>
        </div>
    )
}

export default LandingPage