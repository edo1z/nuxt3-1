import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  ssr: true,
  typescript: {
    strict: true,
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
  },
  app: {
    head: {
      title: "NUXT3-1",
      meta: [{ property: "ogp:image", content: "default.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
