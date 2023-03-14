import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore'; // firestore 추가
import './App.css';

function CreateExperience() {
  const [image, setImage] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [context, setContext] = useState<string>('');

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files != null && e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
      uploadImage(e.target.files[0]);
    }
  }

  async function uploadImage(file: File) {
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setImageUrl(await fileRef.getDownloadURL());
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const db = firebase.firestore();
    await db.collection('experiences').add({
      title,
      location,
      context,
      imageUrl,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(), // createdAt 필드 추가
    });
    setTitle('');
    setLocation('');
    setContext('');
    setImage('');
    setImageUrl('');
  }

  return (
    <div className="App">
      <header className="App-header">
        Create your experience!
        <form onSubmit={handleSubmit}>
          <p>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </p>
          <p>
            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          </p>
          <p>
            <input type="file" name="file" accept="image/jpeg" onChange={handleImage} style={{ marginLeft: "85px" }} />
          </p>
          <p>
            <textarea placeholder="Content" value={context} onChange={(e) => setContext(e.target.value)} style={{ height: '200px' }} />
          </p>
          <p>
            <button type="submit">Post</button>
          </p>
        </form>
      </header>
    </div>
  );
}

export default CreateExperience;

