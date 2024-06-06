// we can do it asynchronously that is non-blocking or
// synchronously

const { readFile, writeFile } = require("fs")

console.log("start");
readFile("./content/first.txt","utf8", (error,result)=> {
    if (error){
        console.log(error);
        return 
    }

    const first = result;
    readFile("./Content/second.txt", "utf-8", (error,result)=> {
        if (error){
            console.log(error)
            return
        }
        const second = result;
        writeFile("./Content/result-asyn.txt", `Here is the result : ${first}, ${second}`,(error,result)=> {
            if (error){
                console.log(error);
                return
            }
            console.log("done with this task");
        })  
    })

})
console.log("starting the next task");
