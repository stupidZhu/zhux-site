import { defineConfig } from "dumi"

export default defineConfig({
  title: "Hello zhux !",
  mode: "site",
  locales: [["zh-CN", "中文"]],
  navs: [
    { title: "Doc", path: "/util-doc" },
    { title: "Blog", path: "/blog" },
    { title: "GitHub", path: "https://github.com/stupidZhu" },
  ],
  // more config: https://d.umijs.org/config
})
