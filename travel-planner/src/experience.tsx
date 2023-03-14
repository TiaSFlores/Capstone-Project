import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import './App.css';

interface Experience {
  id: string;
  title: string;
  location: string;
  context: string;
  imageUrl: string;
}

function CreateExperience() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [context, setContext] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !location || !context || !image) {
      return;
    }
    setUploading(true);
    const db = firebase.firestore();
    const storage = firebase.storage();
    const experiencesRef = db.collection('experiences');
    const imageName = Date.now() + image.name;
    const imageRef = storage.ref().child(`images/${imageName}`);
    const snapshot = await imageRef.put(image);
    const imageUrl = await snapshot.ref.getDownloadURL();
    const newExperience: Experience = {
      id: '',
      title,
      location,
      context,
      imageUrl,
    };
    const docRef = await experiencesRef.add(newExperience);
    newExperience.id = docRef.id;
    await docRef.set(newExperience);
    setTitle('');
    setLocation('');
    setContext('');
    setImage(null);
    setUploading(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    setImage(event.target.files[0]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Create Experience</h1>
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="context">Context:</label>
            <textarea
              name="context"
              value={context}
              onChange={(event) => setContext(event.target.value)}
            />
          </p>
          <p>
            <label htmlFor="image">Image:</label>
            <input type="file" name="image" onChange={handleFileChange} />
          </p>
          <p>
            <button type="submit" disabled={uploading}>
              {uploading ? 'Uploading...' : 'Post'}
            </button>
          </p>
        </form>
      </header>
    </div>
  );
}

export default CreateExperience;
