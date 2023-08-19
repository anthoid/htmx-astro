import {
  defineConfig,
  presetUno,
  presetTypography,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno({
      dark: "media",
    }),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup()],
  variants: [
    (matcher) => {
      const match = matcher.match(/^htmx-(swapping|added|request)/);
      if (!match || !match[0]) return matcher;
      return {
        matcher: matcher.replace(`${match[0]}:`, ""),
        selector: (s) => `${s}.${match[0]}`,
      };
    },
  ],
});
