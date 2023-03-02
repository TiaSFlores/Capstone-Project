import storage from "@react-native-firebase/storage";
import ref from "@react-native-firebase/storage";
import uploadBytes from "@react-native-firebase/storage";

function uploadImage(imageID) {
    let reference = ref(storage, imageID);
    let task = reference.putFile('gs://travelplannercapstone.appspot.com');

    task.then(() => {
        console.log('Image uploaded');
    });
}

// function getImage(imageID) {
//     let reference = storage().ref(imageID);
//     reference.map(someVar);
// }