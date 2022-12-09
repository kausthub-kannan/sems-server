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

    module.exports.data = async (req,res) => {
        try{
            const realRef = ref(SEMS, "SEMS/1-set");
            onValue(realRef, (snapshot) => {
              const date = new Date()
                const data = {
                  Real_Time_Power : snapshot.val(),
                  Date: date.getDate(),
                  Hours: date.getHours(),
                  Month: date.getMonth()+1,
                }
                res.json(data);
                console.log(data)
            });
        }catch(error){
            console.log(error)
        }
        
    }