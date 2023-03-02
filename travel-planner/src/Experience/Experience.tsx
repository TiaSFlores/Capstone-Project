import React from 'react';
import './App.css';


const Experience = (props: any) => {
  const {
    postId,
    photoId,

  } = props
  const classes = "experience " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Experience;