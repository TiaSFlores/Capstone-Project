import { Link } from "react-router-dom"

function LandingPage(){
    return(
        <div className="App">
            <header className="App-header">
               Have an account? <Link to={'/login'}>Log in here!</Link>
               New to the Travel Planner? <Link to={'/register'}>Register Now!</Link>

            </header>
        </div>
    )
}

export default LandingPage