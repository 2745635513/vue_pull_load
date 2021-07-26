module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryNam: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
