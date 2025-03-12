function getRandomExcluding(min, max, excludes) {
    let num;
    do {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (excludes.includes(num));
    return num;
}

let numAllow = false;
let charAllow = false;
let length = 8;
let password = "";
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
if (numAllow) str += "0123456789";
if (charAllow) str += "!@#$%^&*_-+=[]{}~`";

if (numAllow && charAllow) {
    let saprator1 = getRandomExcluding(1,6,[]);
    let numIdx = getRandomExcluding(52, 61, []);
    let charIdx = getRandomExcluding(62, 79, []);
    if(saprator1 === 1){
        password += str.charAt(numIdx);
        password += str.charAt(charIdx);
        for(let i = 1;i<=(length-2);i++){
            let strIdx = getRandomExcluding(0,79,[numIdx,charIdx]);
            password += str.charAt(strIdx);
        }
    }else if(saprator1===2){
        password += str.charAt(numIdx);
        for(let i = 1;i<=(length-2);i++){
            let strIdx = getRandomExcluding(0,79,[numIdx,charIdx]);
            password += str.charAt(strIdx);
        }
        password += str.charAt(charIdx);
    }else if(saprator1===3){
        password += str.charAt(charIdx);
        password += str.charAt(numIdx);
        for(let i = 1;i<=(length-2);i++){
            let strIdx = getRandomExcluding(0,79,[numIdx,charIdx]);
            password += str.charAt(strIdx);
        }
    }else if(saprator1===4){
        password += str.charAt(charIdx);
        for(let i = 1;i<=(length-2);i++){
            let strIdx = getRandomExcluding(0,79,[numIdx,charIdx]);
            password += str.charAt(strIdx);
        }
        password += str.charAt(numIdx);
    }else if(saprator1===5){
        for(let i = 1;i<=(length-2);i++){
            let strIdx = getRandomExcluding(0,79,[numIdx,charIdx]);
            password += str.charAt(strIdx);
        }
        password += str.charAt(numIdx);
        password += str.charAt(charIdx);
    }else if(saprator1===6){
        for(let i = 1;i<=(length-2);i++){
            let strIdx = getRandomExcluding(0,79,[numIdx,charIdx]);
            password += str.charAt(strIdx);
        }
        password += str.charAt(charIdx);
        password += str.charAt(numIdx);
    }
}else if(numAllow && !charAllow) {
    let numIdx = getRandomExcluding(52, 61, []);
    let saprator1 = getRandomExcluding(1,2,[]);
    if(saprator1 === 1){
        password += str.charAt(numIdx);
        for(let i = 1;i<=(length-1);i++){
            let strIdx = getRandomExcluding(0,61,[numIdx]);
            password += str.charAt(strIdx);
        }
    }else if(saprator1 === 2){
        for(let i = 1;i<=(length-1);i++){
            let strIdx = getRandomExcluding(0,61,[numIdx]);
            password += str.charAt(strIdx);
        }
        password += str.charAt(numIdx);
    }
}else if(!numAllow && charAllow){
    let charIdx = getRandomExcluding(52,69,[]);
    let saprator1 = getRandomExcluding(1,2,[]);
    if(saprator1 === 1){
        password += str.charAt(charIdx);
        for(let i = 1;i<=(length-1);i++){
            let strIdx = getRandomExcluding(0,69,[charIdx]);
            password += str.charAt(strIdx);
        }
    }else if(saprator1 === 2){
        for(let i = 1;i<=(length-1);i++){
            let strIdx = getRandomExcluding(0,69,[charIdx]);
            password += str.charAt(strIdx);
        }
        password += str.charAt(charIdx);
    }
}else{
    for(let i = 1;i<=(length);i++){
        let strIdx = getRandomExcluding(0,51,[]);
        password += str.charAt(strIdx);
    }
}



/* ----------------------------- */

