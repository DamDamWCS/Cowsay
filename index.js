const wilder = require('./information').wilder;
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello ${wilder.name} from ${wilder.campus}` ,
}));