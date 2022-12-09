const {initializeApp} = require('firebase/app');
const { getFirestore, doc, setDoc, addDoc, collection } = require('firebase/firestore');
const { getDatabase, onValue, ref} = require('firebase/database');

  const firebaseConfig = {
    apiKey: "AIzaSyBc_VSDWzMHZKTwPwPPZnSfb5CNQF81j1s",
    authDomain: "sems-73da9.firebaseapp.com",
    projectId: "sems-73da9",
    storageBucket: "sems-73da9.appspot.com",
    messagingSenderId: "919880061807",
    appId: "1:919880061807:web:fcadb0d2fba606b3d00e9a",
    measurementId: "G-JM7W08MXPB",
    databaseURL: "https://sems-73da9-default-rtdb.firebaseio.com/",
  };
  
  //Realtime Database Config
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  //Realtime Database Config
  const SEMS = getDatabase(app);

  //User Creation 
  module.exports.signIn = async (req,res) => {
    try{
        const data = req.body;
        await addDoc(collection(db, "Users"), data);
        console.log({status: 200});

    }catch(error){
        console.log(error)
    }
    
}

    