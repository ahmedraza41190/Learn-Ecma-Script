import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getDatabase,ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth ,signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAzpav9KsTQ9_nr6gi4mInTp7JrsGHLHpA",
    authDomain: "quiz-app-65c3e.firebaseapp.com",
    projectId: "quiz-app-65c3e",
    storageBucket: "quiz-app-65c3e.appspot.com",
    messagingSenderId: "546653806160",
    appId: "1:546653806160:web:4590ef27bf891bf505bb55",
    measurementId: "G-HL5GZ85GPD" 
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);

  let sbtn = document.getElementById('sbtn')
  sbtn.addEventListener(`click`,()=>{
    let email = document.getElementById('semail').value
    let password = document.getElementById('spass').value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log(user)
    // let rnum = Math.random()*100
    // let change = Math.floor(rnum)
    set(ref(db,`users/${user.uid}`),{
        email: email,
        pass: password
    })
    console.log('data inserted successfully')
  })
  .catch((error) => {
    
    console.log(error)

  });
  })

// let lbtn = document.getElementById('lbtn').addEventListener('click',()=>{
//     let email = document.getElementById('lemail').value
//     let password = document.getElementById('lpass').value

//     signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {

//     const user = userCredential.user;
//     console.log(user)
//   })
//   .catch((error) => {
//     console.log(error)
//   });

// })