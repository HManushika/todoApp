import { initializeApp }  from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyD8rFZnqTo2f7BQdycyNWpaeozqYFRNaDA",
  authDomain: "todoapp-d90ab.firebaseapp.com",
  databaseURL: "https://todoapp-d90ab.firebaseio.com",
  projectId: "todoapp-d90ab",
  storageBucket: "",
  messagingSenderId: "546474061432"
});

export const  db = app.database();
export const todoRef = db.ref('todos');




