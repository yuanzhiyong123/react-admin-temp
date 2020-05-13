const path = require("path");
const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy,
} = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css",
  }),
  addWebpackAlias({
    //别名
    "@src": path.resolve(__dirname, "src"),
    "@components": path.resolve(__dirname, "src/components"),
    "@common": path.resolve(__dirname, "src/common"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@store": path.resolve(__dirname, "src/store"),
    "@route": path.resolve(__dirname, "src/route"),
    "@service": path.resolve(__dirname, "src/service"),
  }),
  addDecoratorsLegacy() //支持装饰器语法
);
