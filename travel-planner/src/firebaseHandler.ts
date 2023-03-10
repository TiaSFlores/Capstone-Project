import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


const firebaseConfig = {
apiKey: "AIzaSyCYKoU8m7KCu_WV8xQL_-qaaOOog3d1YAM",
authDomain: "travelplannercapstone.firebaseapp.com",
projectId: "travelplannercapstone",
storageBucket: "travelplannercapstone.appspot.com",
messagingSenderId: "920009874687",
appId: "1:920009874687:web:d72fa04b396025fb7640ca",
measurementId: "G-H5SCH0TVFE"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const db = getFirestore(app)

// Get all the users in the database (this is just an example)
async function getCollections(){
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
}

// User log in (does not use firebaseAuth but maybe in the future?)
async function logIn(username: String, password: String){
  // console.log("entered credentials", username, password)

  const q = query(collection(db, "Users"), where("username", "==", username), where("password", "==", password))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.docs.length > 0){
    console.log("Valid user login! Redirecting...")
    return true
    
  } else {
    console.log("Invalid User login!")
    return false
  }
}

async function createUser(username: String, password: String){
  // check if that user already exists first
  const q = query(collection(db, "Users"), where("username", "==", username))
  const querySnapshot = await getDocs(q)
  if (querySnapshot.docs.length > 0){
    console.log("Error: This user already exists! please try again.")
    return false
  } else {
    await addDoc(collection(db, "Users"), {
      username: username,
      password: password
    })
    console.log("New user created! Redirecting to login page...")
    return true
  }
}

export { getCollections, logIn, createUser }
