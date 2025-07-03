import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import prefixer from "postcss-prefix-selector";

// https://astro.build/config
export default defineConfig({
  build: {
    assetsPrefix: "https://cdn.nav.no/min-side/tms-microfrontend-test",
  },
  vite: {
    css: {
      postcss: {
        plugins: [
          prefixer({
            prefix: ".sokos-astro-template", // brukes for å unngå å lekke css ut av mikrofrontenden
            ignoreFiles: [/module.css/],
          }),
        ],
      },
    },
  },
  integrations: [
    react(),
    {
      name: "importmap-externals",
      hooks: {
        "astro:build:setup": ({ vite, target }) => {
          if (target === "client") {
            vite.build.rollupOptions["external"] = [
              "react",
              "react-dom"
            ];
          }
        },
      },
    },
  ],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
