import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  app: {
    head: {
      title: "NUXT3-1",
      meta: [{ property: "ogp:image", content: "default.png" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
