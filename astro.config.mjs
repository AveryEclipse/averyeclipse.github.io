import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import remarkBreaks from 'remark-breaks'; /* i shouldnt need to use a PLUGIN just to properly do a hard break ffs */

export default defineConfig({
  site: "http://avery.is-a.dev",
  integrations: [icon()],
  trailingSlash: "never",
  markdown: {
    remarkPlugins: [remarkBreaks],
  },
});