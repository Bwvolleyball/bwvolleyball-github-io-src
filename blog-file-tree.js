// this tiny js script makes a json file for my blog index.
const dirTree = require("directory-tree");
fs = require('fs');

const items = []
const tree = dirTree("./src/assets/blog", { extensions: /\.md/ }, ((item) => {
  item.path = item.path.replace(/^src\//, '');
  delete item.extension;
  delete item.type;
  items.push(item);
}) );

fs.writeFileSync("./src/assets/blog-index.json", JSON.stringify(items),{encoding:'utf8',flag:'w'})
