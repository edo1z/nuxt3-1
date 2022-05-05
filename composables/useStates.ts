import { SignInStatus } from "@/model/sign_in_status";

export const useFirebaseApp = () => useState("firebaseApp", () => undefined);
export const useSignInStatus = () =>
  useState<SignInStatus>("signInStatus", () => "NONE");
export const useSignInUser = () => useState("signInUser", () => null);
