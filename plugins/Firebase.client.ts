export default defineNuxtPlugin(async (nuxtApp) => {
  await initFirebase();
  await initAuth();
});
