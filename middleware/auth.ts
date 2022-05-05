export default defineNuxtRouteMiddleware((to, from) => {
  const signInUser = useSignInUser();
  if (!signInUser.value) {
    return navigateTo("/auth/sign-in");
  }
});
