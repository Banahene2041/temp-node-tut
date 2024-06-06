// GLOBALS   - NO WINDOW !!! 
// can be access any part of your app

//__dirname      -path to current directory
// __filename    -file name
// require       -function to use module (Common JS)
// module        - info about current module (file)
// process       -info about env where the program is being executed 

// console.log(__filename);
// console.log(module);
// console.log(process);
// console.log(__dirname);

console.log(process);

setInterval(()=> {
    console.log("Hello world!");
},2000)