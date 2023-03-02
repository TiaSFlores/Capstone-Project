import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Login';
import Register from './Register';
import LandingPage from './LandingPage';
import Experience from './Experience';

const router = createBrowserRouter([
  {
    path: "/experience",
    element: <Experience/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/home",
    element: <App />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/",
    element: <LandingPage />
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

