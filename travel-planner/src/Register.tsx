import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { createUser } from './firebaseHandler';

function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    async function createAccountHandler(username: String, password: String){
        const response = await createUser(username, password)

        if(response) {
            navigate('/login')
        }else {
            alert('This user already exists. Please try again.')
        }
    }

    return(
        <div className="App">
            <header className="App-header">
                Register Now!
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                />

                <button onClick={() => createAccountHandler(username, password)}>
                Create Account!
                </button>

                <p>Already have an account? <Link to={`/login`}>Login here!</Link></p>
            </header>
        </div>
    )
}

export default Register