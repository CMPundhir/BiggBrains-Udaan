const prompt = require("prompt-sync") ({sigint: true})
let dob = prompt("Enter your Date of birth : ");

let date = new Date(dob);
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Your Date of birth => "+days[date.getDay()])
