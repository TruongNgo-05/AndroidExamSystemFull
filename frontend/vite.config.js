import JavaScriptObfuscator from "javascript-obfuscator";
import { defineConfig } from "vite";
import { randomUUID } from "node:crypto";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(() => {
  // One immutable identifier shared by the running JS and the version endpoint.
  // Generate it for every build, including redeploys of the same Git commit.
  const buildVersion = randomUUID();
  return {
    base: "/",
    server: { proxy: { "/api": {target: process.env.BACKEND_URL || "http://localhost:8080", changeOrigin: true}, "/media": process.env.BACKEND_URL || "http://localhost:8080" } },
    build: {
      sourcemap: false,
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code !== "MODULE_LEVEL_DIRECTIVE") warn(warning);
        },
      },
    },
    resolve: {
      alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    },
    esbuild: { jsx: "automatic" },
    define: { __APP_BUILD_VERSION__: JSON.stringify(buildVersion) },
    plugins: [
      {
        name: "download-key-obfuscation",
        apply: "build",
        enforce: "pre",
        transform(code, id) {
          if (!id.endsWith("/features/quiz/services/downloadKey.js")) return;
          return {
            code: JavaScriptObfuscator.obfuscate(code, {
              compact: true,
              identifierNamesGenerator: "hexadecimal",
              renameGlobals: false,
              stringArray: true,
              stringArrayEncoding: ["base64"],
              stringArrayThreshold: 1,
              controlFlowFlattening: false,
              deadCodeInjection: false,
              selfDefending: false,
              debugProtection: false,
              sourceMap: false,
            }).getObfuscatedCode(),
            map: null,
          };
        },
      },
      {
        name: "deployment-version",
        apply: "build",
        generateBundle() {
          this.emitFile({
            type: "asset",
            fileName: "version.json",
            source: JSON.stringify({ version: buildVersion }),
          });
        },
      },
    ],
  };
});
