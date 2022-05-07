export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return;
  const signInStatus = useSignInStatus();
  await waitInitAuth();
  if (signInStatus.value === "IN") {
    return;
  } else {
    return navigateTo("/auth/sign-in");
  }
});
