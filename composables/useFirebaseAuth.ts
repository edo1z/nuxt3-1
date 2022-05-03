import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
const provider = new GoogleAuthProvider();

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

//     signIn() {
//       const auth = getAuth($firebaseApp);
//       signInWithRedirect(auth, provider);
//     },
//     async signOut() {
//       const auth = getAuth($firebaseApp);
//       await auth.signOut();
//     },
//     async getIdToken() {
//       if (!this.user) return null;
//       return await this.user.getIdToken();
//     },
