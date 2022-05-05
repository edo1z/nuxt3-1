import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const initFirebase = async () => {
  const conf = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: conf.firebase.apiKey,
    authDomain: conf.firebase.authDomain,
    projectId: conf.firebase.projectId,
    appId: conf.firebase.appId,
  };
  const firebaseApp = useFirebaseApp();
  // @ts-ignore
  firebaseApp.value = initializeApp(firebaseConfig);
};

export const initAuth = async () => {
  const firebaseApp = useFirebaseApp();
  const signInStatus = useSignInStatus();
  const signInUser = useSignInUser();
  if (!firebaseApp.value) await initFirebase();
  const auth = getAuth(firebaseApp.value);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // @ts-ignore
      signInUser.value = user;
      signInStatus.value = "IN";
    } else {
      signInUser.value = null;
      if (signInStatus.value === "IN") {
        location.reload();
      }
      signInStatus.value = "OUT";
    }
  });
};

export const createUserWithEmail = (email: string, password: string) => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp.value);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("success! created user with email", userCredential);
    })
    .catch((err) => {
      console.log("error! create user with email", err.code, err.message);
    });
};

export const signInWithEmail = (email: string, password: string) => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp.value);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log("success! sign-in with email", userCredential);
    })
    .catch((err) => {
      console.log("error! sign-in with email", err.code, err.message);
    });
};

export const signInWithGoogle = () => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp.value);
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("success! sign-in with google", result);
    })
    .catch((err) => {
      console.log("error! sign-in with google", err.code, err.message);
    });
};

export const signInWithTwitter = () => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp.value);
  //FIXME
};

export const signOut = async () => {
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp.value);
  await auth.signOut();
};

export const getIdToken = async () => {
  const signInUser = useSignInUser();
  if (signInUser.value) return null;
  // @ts-ignore
  return await signInUser.value.getIdToken();
};
