import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        tsconfigPaths({ projects: ["./tsconfig.json"] }),
        cloudflare({ viteEnvironment: { name: "ssr" } }),
        tanstackStart({
            prerender: {
                enabled: true,
            },
        }),
        react(),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
});
