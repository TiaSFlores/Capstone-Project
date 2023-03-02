import storage from '@react-native-firebase/storage';

uploadImage(imageID) {
    let reference = storage().ref(imageID);
    let task = reference.putFile('gs://travelplannercapstone.appspot.com');

    task.then(() => {
        console.log('Image uploaded');
    }).catch((e) => console.log('error uploading image: ', e));
}
