import React from "react";
// import firebase from "firebase";
import style from "../../styles/library.module.css";
// import db from "../../firebase";
import "firebase/storage";
import { getFirestore, collection, getDocs, doc, setDoc, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// const firebaseApp = initializeApp({
//   apiKey: '### FIREBASE API KEY ###',
//   authDomain: '### FIREBASE AUTH DOMAIN ###',
//   projectId: '### CLOUD FIRESTORE PROJECT ID ###'
// });

const metadata = {
    contentType: 'image/png',
  };

  


const firebaseConfig = {
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);


function Upload() {
    const [fileUrl, setFileUrl] = React.useState(null)
    const [musicUrl, setMusicUrl] = React.useState(null)
    const [disable, setDisable] = React.useState(true);
 
   React.useEffect(() => {
     if (musicUrl !== null && fileUrl !== null) {
       setDisable(false);
       alert("click on submit")
       console.log(disable)
     }
   },[musicUrl, fileUrl])
    const filechanged = async (e) =>{
        var file = e.target.files[0];
        var storageRef = ref(storage, "Image");
        const fileRef = ref(storageRef, file.name)
        await uploadBytes(fileRef, file);
        // var fileRef = await addDoc(collection(db, "Image"), {
        //     name: file.name
        //   });
        // getDownloadURL(uploadTask.snapshot.ref)
        setFileUrl(await getDownloadURL(fileRef))    
   }
    const musicchanged = async (e) =>{
        var music = e.target.files[0];
        var storagemRef = ref(storage, "Music");
        const musicRef = ref(storagemRef, music.name)
        await uploadBytes(musicRef, music);
//         getDownloadURL(starsRef)
//   .then((url) => {
//     // Insert url into an <img> tag to "download"
//   })
        setMusicUrl(await getDownloadURL(musicRef))   
   }
  const submit =  (e) => {
     e.preventDefault();  
       const musicname = e.target.musicname.value;
       if (!musicname) {
         return
       }
       addDoc(collection(db, "Music"), {
            name: musicname,
            music: musicUrl,
            image: fileUrl
          });
    //    db.collection("Music").doc(musicname).set({
    //      name: musicname,
    //      music: musicUrl,
    //      image: fileUrl
    //    })
       alert("Music added") 
 }
    return (
      <div className={style.uploadpage}>
        <form onSubmit={submit} className={style.uploadform}>
          <label>images</label>
          <input
            type="file"
            className={style.myfile}
            name="img"
            onChange={filechanged}
            required
          />
          <label>Music files</label>
          <input type="file" name="music" onChange={musicchanged} required />
          <input
            type="text"
            name="musicname"
            placeholder="Music name"
            required
          />
          <button className={style.btn} disabled={disable}>Submit</button>
        </form>
      </div>
   );
 }
 export default Upload