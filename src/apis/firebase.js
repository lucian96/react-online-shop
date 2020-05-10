import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../configs/firebase';

firebase.initializeApp(firebaseConfig);

var googleProvider = new firebase.auth.GoogleAuthProvider();
var facebookProvider = new firebase.auth.FacebookAuthProvider();


export function signInWithGoogle(){
    return firebase.auth().signInWithPopup(googleProvider);
}

export function signInWithFacebook(){
    return firebase.auth().signInWithPopup(facebookProvider)
}

export function signOut(){
    return firebase.auth().signOut();
}


