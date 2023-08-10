import { initializeApp } from "firebase/app";

import {
  APP_apiKey,
  APP_authDomain,
  APP_projectId,
  APP_storageBucket,
  APP_messagingSenderId,
  APP_appId,
  APP_measurementId
} from "@env";

const firebaseConfig = {
  apiKey: APP_apiKey,
  authDomain: APP_authDomain,
  projectId: APP_projectId,
  storageBucket: APP_storageBucket,
  messagingSenderId: APP_messagingSenderId,
  appId: APP_appId,
  measurementId: APP_measurementId
};

export const Firebase = initializeApp(firebaseConfig);