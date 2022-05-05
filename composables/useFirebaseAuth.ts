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
  console.log("init firebase");
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
  console.log("initAuth");
  const firebaseApp = useFirebaseApp();
  const firebaseUser = useFirebaseUser();
  console.log("firebaseUser", firebaseUser.value);
  if (!firebaseApp.value) {
    await initFirebase();
  }
  console.log("get auth");
  const auth = getAuth(firebaseApp.value);
  console.log("auth init");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("logged in", user);
      // @ts-ignore
      firebaseUser.value = user;
    } else {
      console.log("logged out");
      firebaseUser.value = null;
    }
  });
};

export const createUserWithEmail = (email: string, password: string) => {
  console.log("createUserWithEmail, email, password");
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
  console.log("signInWithGoogle");
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
  console.log("signOut...");
  const firebaseApp = useFirebaseApp();
  const auth = getAuth(firebaseApp.value);
  await auth.signOut();
};

export const getIdToken = async () => {
  const firebaseUser = useFirebaseUser();
  if (firebaseUser.value) return null;
  // @ts-ignore
  return await firebaseUser.value.getIdToken();
};
