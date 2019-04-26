import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import config from "@/constants/config";

firebase.initializeApp(config.firebase);

export default firebase;
