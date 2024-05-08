import styles from "./Components/style.module.css"
import CheckBox from "./Components/checkbox"
import './App.css'
import { useState } from "react";

function App() {


  const [Captail,SetCaptials] = useState("");
  const [Lower,SetLowers] = useState("");
  const [symbol,SetSymbols] = useState("");
  const [number,Setnumber] = useState("");
  const [length,SetLength] = useState(8);
  const [randompassword,Setrandompassword] = useState("");


  let Caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowers = "abcdefghijklmnopqrstuvwxyz";
  let symbols = "!@#$%^&*.";
  let numbers = "1234567890"


  // let ran ="";


  function storepasswordtype(e){

    if(e.target.checked === true){
      if(e.target.value === "Include upper case"){
        SetCaptials(e.target.value)

      }
      else if(e.target.value === "Include lower case"){
      SetLowers(e.target.value)

       }
      else if(e.target.value === "Include numbers"){
        Setnumber(e.target.value)

      }
      else if(e.target.value === "Include symbols"){
      
      SetSymbols(e.target.value)


      }
    }else{

      if(e.target.value === "Include upper case"){
        SetCaptials("")

      }
      else if(e.target.value === "Include lower case"){
      SetLowers("")

       }
      else if(e.target.value === "Include numbers"){
        Setnumber("")

      }
      else if(e.target.value === "Include symbols"){
      
      SetSymbols("")


      }
      

    }

  }

  function getlenghtfrominout(e){
    let val = parseInt(e.target.value)
    SetLength(e.target.value)
    console.log(e.target.value)
  }

  function getPassword(e){


    if(Captail === "" && Lower === "" && symbol === "" && number ===""){
      alert("Please Select the password typecheck box")
    }

    let ran=""

    if(length === ""){
      alert("Enter the length")
    }
  
    for(let i = 1  ; i <= length; i++){

      if(length >= 8 && length <= 50){
        console.log("oras");


        if(number){
        ran  +=  numbers[Math.floor(Math.random()*numbers.length)];
        console.log("number");
        }
        if(Lower){
          ran  +=  lowers[Math.floor(Math.random()*lowers.length)];
        console.log("lower");

        }
        if(Captail){
        ran  +=  Caps[Math.floor(Math.random()*Caps.length)];
        console.log("cap");

        }
        if(symbol){
          ran  +=  symbols[Math.floor(Math.random()*symbols.length)];
        console.log("sym");

        }
    }else{
      alert("Please enter the length between 8 to 50")
      return;
      
    }

 
  }

    

  Setrandompassword(ran.slice(0,length))


  }
  
  function copyText(){


    if(randompassword !== ""){
      navigator.clipboard.writeText(randompassword)
      .then(()=>{
          alert("Password Copied")
      });
    }else{
      
        alert("Password has not been generated ,Make sure you select all the required options");
    }
   
  }

  
  return (
    <>

     <h1 style={{textAlign:"center"}}>Password Generator</h1> 
    <div className={styles.copydiv}>

      <input type="text" disabled="true" value={randompassword} className={styles.inputsize}></input>
      <button className={styles.copyimage} onClick={copyText}>
      <img src="https://www.freeiconspng.com/uploads/copy-icon-25.png" title="copy" className={styles.cpimg}></img>
      </button>
    </div>


    <div className={styles.passwordlenghtdiv}>
      <div className={styles.passwordchar}>
        <p>Select Password length<b>(**8-50 characters**)</b></p>
      </div>
      <div  className={styles}>
        <input type="number"  placeholder="length of password" value={length} onChange={getlenghtfrominout}></input>
      </div>
    </div>

    <div className={styles.checkdiv}>


        <CheckBox label={"Include upper case"} func={getPassword} storevalue={storepasswordtype}/>
        <CheckBox label={"Include lower case"}  func={getPassword} storevalue={storepasswordtype}/>
        <CheckBox label={"Include numbers"}  func={getPassword} storevalue={storepasswordtype}/>
        <CheckBox label={"Include symbols"}  func={getPassword} storevalue={storepasswordtype}/>
    </div>


    <div>
      <button className={styles.buttonstyle} onClick={getPassword}>Generate Password</button>
    </div>

    </>
  )
}

export default App
