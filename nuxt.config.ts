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
});
