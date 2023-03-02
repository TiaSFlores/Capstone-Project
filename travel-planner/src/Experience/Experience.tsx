import React from 'react';
import '../App.css';
import { getImage } from '../firebaseHandler';
import './Experience.css'


function Experience (props: any) {
  
  getImage(props.imageID).then((url) => {
    const img = document.getElementById(props.imageID)
    img?.setAttribute('src', url)
  })

  return (
    <div className='container'>
      <div className='experience_card'>
      <h1>{props.title}</h1>
      <img id={props.imageID}/><br/>
      
      {props.location._lat}&emsp;{props.location._long}
      <br/>
      {props.description}
      <br/>
      {props.rating}⭐
      </div>
    </div>
  
  )
};

export default Experience;