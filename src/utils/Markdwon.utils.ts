import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

export const getMdParser = () => {
  return new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str: string, lang: string) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }
      return ""; // use external default escaping
    },
  });
};

export const PLUGINS = [
  "header",
  "fonts",
  "table",
  "image",
  "link",
  "clear",
  "logger",
  "mode-toggle",
  "full-screen",
];

export const getMarkConfig = {
  view: {
    menu: true,
    md: true,
    html: true,
    fullScreen: true,
    hideMenu: true,
  },
  table: {
    maxRow: 5,
    maxCol: 6,
  },
  syncScrollMode: ["leftFollowRight", "rightFollowLeft"],
}
