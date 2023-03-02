import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import { getExperiences } from './firebaseHandler';
import { DocumentData } from 'firebase/firestore';

function App() {
  let exp: { id: string; data: DocumentData; }[] = []
  // Get all the posts and display them
  
  getExperiences().then((posts) => {
    console.log(posts)
    exp = posts
  })

  console.log(exp)
  

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;

