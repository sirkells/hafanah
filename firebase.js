import firebase from "firebase";
import "firebase/firestore";
const firebaseConfig = {
//you will find this in your project settings on firebase
};
!firebase.apps.length
 ? firebase.initializeApp(firebaseConfig).firestore()
: firebase.app().firestore();
var db = firebase.firestore();
export default db