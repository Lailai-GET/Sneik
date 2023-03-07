import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIAk_rk2qzwVbIpdD7Hllh84Wn89iJuQ8",
  authDomain: "eplejakt-43c9c.firebaseapp.com",
  projectId: "eplejakt-43c9c",
  storageBucket: "eplejakt-43c9c.appspot.com",
  messagingSenderId: "286558868302",
  appId: "1:286558868302:web:46c3832a3aca50067b041f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getHighscores() {
  const docRef = doc(db, "highscores", "list");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    model.online = docSnap.data();
    console.log("docSnap", docSnap.data(), "model", model.online);
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
async function setHighscores() {
  await setDoc(doc(db, "highscores", "list"), model.online);
}
export {getHighscores, setHighscores};