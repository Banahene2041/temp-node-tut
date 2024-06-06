// Modules
// CommonJS, every files is module (by default)
// Modules = Encapsulated code (only sharing minimum)

const { log } = require("console")
const names = require("./4-firstmodule")
const sayHi = require("./5-utils")


 
sayHi("susan")
sayHi(names.john)
sayHi(names.peter)

const data = require("./6-alternative")
require("./7-mine-grenade")

