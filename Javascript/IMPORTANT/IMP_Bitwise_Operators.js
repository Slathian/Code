const rPerms = 4;
const wPerms = 2;
const exPerms = 1;

let myPerms = 0
myPerms = myPerms | rPerms | wPerms; //?

let message = (myPerms & rPerms) ? 'you have reading rights' : 'you do not have reading rights'; //?
let message1 = (myPerms & wPerms) ? 'you have writing rights' : 'you do not have writing rights'; //?
let message2 = (myPerms & exPerms) ? 'you have execution rights' : 'you do not have execution rights'; //?