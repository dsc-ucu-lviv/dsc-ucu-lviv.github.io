import React from 'react';
import MaterialSet from './components/MaterialSet'

import './App.css';
import "./style.css";

import * as firebase from "firebase/app";
const firebaseConfig = {
    apiKey: "...",
    authDomain: "dscucumaterials.firebaseapp.com",
    databaseURL: "https://dscucumaterials.firebaseio.com",
    projectId: "dscucumaterials",
    storageBucket: "dscucumaterials.appspot.com",
    messagingSenderId: "...",
    appId: "...",
    measurementId: "..."
};
firebase.initializeApp(firebaseConfig);

function App() {
  return (
      <div className="main_shelf">
          {/*<script src="/__/firebase/7.5.0/firebase-app.js"></script>*/}

          {/*<script src="/__/firebase/7.5.0/firebase-analytics.js"></script>*/}

          {/*<!-- Initialize Firebase -->*/}
          {/*<script src="/__/firebase/init.js"></script>*/}
        <MaterialSet/>
      </div>
  );
}

export default App;
