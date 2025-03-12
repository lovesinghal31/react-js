function getRandomExcluding(min, max, excludes) {
    let num;
    do {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (excludes.includes(num)); // Keep looping if num is in the exclude list
    return num;
}


let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-+=[]{}~`"
let password = "";
let idx = Math.floor(Math.random()*str.length);

let numIdx = getRandomExcluding(52,61,[]);
let charIdx = getRandomExcluding(62,79,[]);
let hola = getRandomExcluding(1,2,[]);
if((hola%2)===0){
    password += str.charAt(charIdx);
    password += str.charAt(numIdx);
}else{
    password += str.charAt(numIdx);
    password += str.charAt(charIdx);
}

console.log(password,charIdx,numIdx);