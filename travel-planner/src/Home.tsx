import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import { getExperiences } from './firebaseHandler';
import { DocumentData } from 'firebase/firestore';
import Experience from './Experience/Experience';



function App() {

  let exp: { id: string; data: DocumentData; }[] = []
  // Get all the posts and display them
  
  const posts = getExperiences().then((posts) => {
    console.log(posts)
    return posts
  })

  console.log(posts, exp)

  type experience = {
    id: string,
    title: string,
    description: string,
    rating: number,
    location: {_lat: number, _long: number},
    imageID: string
  }
  
  const experiences: experience[] = [
    {
      id: "FhliVEB2PKFQpdElbH7S",
      title: "Corvallis!",
      description: "Best college town in the PNW!",
      rating: 9,
      location: {_lat: 44.5646, _long: 123.262},
      imageID: "corvallis.jpeg"
    },
    {
      id: "QqRdWsbizWThz53QvdSv",
      title: "Island Trip to Fiji",
      description: "White sand beaches and turquoise water!",
      rating: 8.3,
      location: {_lat: 17.7134, _long: 178.065},
      imageID: "fiji.jpg"
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        {experiences.map((e) => (
          <Experience
          title={e.title}
          imageID={e.imageID}
          description={e.description}
          location={e.location}
          rating={e.rating}
          />
        ))}
      </header>
    </div>
  );
}

export default App;

