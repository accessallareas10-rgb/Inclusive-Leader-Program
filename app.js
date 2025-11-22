// src/app.js
import { db, storage } from "../firebase-config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

async function testFirestore() {
  await addDoc(collection(db, "testCollection"), { hello: "world" });
  const snapshot = await getDocs(collection(db, "testCollection"));
  snapshot.forEach(doc => console.log("Firestore doc:", doc.id, doc.data()));
}

testFirestore();
