import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import prefixer from "postcss-prefix-selector";

export default defineConfig({
	build: {
		inlineStylesheets: "always",
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
						vite.build.rollupOptions.external = [
							"react",
							"react-dom",
							"jsx-runtime",
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
