// run below command once to install prompt-sync in your system
// npm install prompt-sync

const prompt = require("prompt-sync")({ sigint: true });

let name = prompt("Enter your name : ")
let age = parseInt(prompt("Enter your age : "))

console.log(`Your name is ${name} and you are ${age} years old.`)