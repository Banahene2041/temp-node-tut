// we can do it asynchronously that is non-blocking or
// synchronously

const { readFileSync, writeFileSync } = require("fs")
console.log("start");
const first = readFileSync("./Content/first.txt", "utf-8")
const seond = readFileSync("./Content/second.txt", "utf-8")


writeFileSync("./Content/result-sync.txt", `Here is the result : ${first}, ${seond}`,{flag: "a"})

console.log("done with this task");
console.log("starting the next one");
