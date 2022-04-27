import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  app: {
    head: {
      title: "NUXT3-1",
      meta: [{ property: "ogp:image", content: "default.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
