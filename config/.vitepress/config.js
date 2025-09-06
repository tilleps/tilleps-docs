import taskLists from "markdown-it-task-lists";
import themeConfig from "./theme-config.js";

/*
 * To get to work with Deno, install the dependencies:
 *
 * deno install npm:vitepress-plugin-mermaid npm:mermaid npm:cytoscape-cose-bilkent npm:cytoscape
 */
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  srcDir: "../docs",
  outDir: "../dist",
  vite: {
    cacheDir: "../var/.vitepress/cache",
    server: {
      port: Deno.env.has("PORT") ? Number(Deno.env.get("PORT")) : 8180,
    },
    optimizeDeps: {
      include: [
        "@braintree/sanitize-url",
        "dayjs",
      ],
    },
    resolve: {
      alias: {
        dayjs: "dayjs/",
        debug: "debug/",
      },
    },
  },
  title: "Tilleps Documentation",
  description: "A VitePress Site",
  themeConfig: themeConfig,
  markdown: {
    config: function (md) {
      md.use(taskLists);
    },
  },
  mermaid: {},
  mermaidPlugin: {},
});
