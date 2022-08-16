import { defineConfig } from "dumi"

export default defineConfig({
  title: "Hello zhux !",
  mode: "site",
  logo: "http://43.142.32.143:7777/zhux-site/logo.svg",
  locales: [["zh-CN", "中文"]],
  navs: [
    { title: "Doc", path: "/util-doc" },
    { title: "Blog", path: "/blog" },
    { title: "GitHub", path: "https://github.com/stupidZhu" },
  ],
  // more config: https://d.umijs.org/config
})
