const path = require("path")


console.log(path.sep)

const filepath = path.join("/Content/","Subfolder", "text.txt")
console.log(filepath);

const base = path.basename(filepath)

console.log(base);

// const dirctory = path.dirname(filepath)

// console.log(dirctory);

const absolute = path.resolve(__dirname,"Content","Subfolder","text.txt")
console.log(absolute);

const dirPath = path.resolve(__dirname)
console.log(dirPath);
