import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { logIn } from './firebaseHandler';

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function userAuth(username: String, password: String){
        const response = await logIn(username, password)
        
        if (response) navigate('/home')
    }

    return(
        <div className="App">
            <header className="App-header">
                Log In
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

                <button onClick={() => userAuth(username, password)}>
                Login
                </button>

                <p>Dont have an account? <Link to={`/register`}>Register here!</Link></p>
            </header>
        </div>
    )
}
export default Login