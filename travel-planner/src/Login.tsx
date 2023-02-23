import { useState } from 'react';
import './App.css';
import { logIn } from './firebaseHandler';

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div className="App">
            

            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            />

            <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            />

            <button onClick={() => logIn(username, password)}>
            Login
            </button>
        </div>
    )
}
export default Login