import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signOut} from 'firebase/auth'

const firebaseApp = initializeApp({
    apiKey: "AIzaSyBVYKmByNBNpqTyZbcsmKtWO2muSboTC98",
    authDomain: "ghcompare-18df3.firebaseapp.com",
    projectId: "ghcompare-18df3",
    storageBucket: "ghcompare-18df3.firebasestorage.app",
    messagingSenderId: "893573735871",
    appId: "1:893573735871:web:d361f8aa778d67a1d1ed0a",
    measurementId: "G-1LJ4N90WLZ"
  })

  const auth = getAuth(firebaseApp);

export { auth, RecaptchaVerifier, signInWithPhoneNumber, signOut };