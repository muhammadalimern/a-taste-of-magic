// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// TanStack's route-tree generator always appends a typed `Register` footer.
// This project is plain JavaScript, so strip that footer before bundling.
const stripRouteTreeTypeFooter = {
  name: "strip-route-tree-type-footer",
  enforce: "pre",
  transform(code, id) {
    if (!id.includes("routeTree.gen.js")) return null;
    const marker = code.indexOf("\nimport type ");
    if (marker === -1) return null;
    return { code: `${code.slice(0, marker)}\n`, map: null };
  },
};

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.js (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Keep the generated route tree as plain JavaScript (pure JS project).
    router: {
      disableTypes: true,
      generatedRouteTree: "routeTree.gen.js",
    },
  },
  vite: {
    plugins: [stripRouteTreeTypeFooter],
  },
});
