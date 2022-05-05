export default defineNuxtRouteMiddleware((to, from) => {
  const firebaseUser = useFirebaseUser();
  if (!firebaseUser.value) {
    return navigateTo("/auth/login");
  }
});
