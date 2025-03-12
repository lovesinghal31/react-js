import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState("");

  // useRef hook
  const passwordRef = useRef(null);

  // random num gen while excluding  numbers
  function getRandomExcluding(min, max, excludes) {
    let num;
    do {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (excludes.includes(num)); // Keep looping if num is in the exclude list
    return num;
  }

  
  const passGen = useCallback(() => {
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

    setPass(password);
  }, [length, numAllow, charAllow, setPass]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 51);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    passGen();
  }, [length, numAllow, charAllow, passGen]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-error bg-gray-800">
        <h1 className="text-white text-center py-2 my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 pb-5">
          <input
            type="text"
            value={pass}
            className="input-error outline-none w-full py-1 px-3 bg-gray-50 rounded-lg"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClip}
            className="outline-none btn btn-error px-3 py-0.5 shrink-0 rounded-lg"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 justify-between">
          <div className="flex items-center gap-x-1 justify-between w-50">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer range range-xs"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="w-30">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="toggle toggle-error toggle-xs"
              defaultChecked={numAllow}
              id="numInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className="toggle toggle-error toggle-xs"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
