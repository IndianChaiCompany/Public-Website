import * as firebase from "firebase/app";
import "firebase/database";

import { firebaseConfig } from "./firebaseConfig"; // git ignored.... make it yourself when cloning

firebase.initializeApp(firebaseConfig);
