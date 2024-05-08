import styles from "./style.module.css"

function CheckBox({label,func,storevalue}){


  


    let Caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowers = "abcdefghijklmnopqrstuvwxyz";
    let symbol = "!@#$%^&*.";
    let numbers = "1234567890"
  
  
    let ran ="";
  
    // function func(){
  
    //   console.log("getpass");
    //   ran=""
    
    //   for(let i = 1  ; i <= 2; i++){
    //     if(ran.length <= 8){
    //     ran  +=  numbers[Math.floor(Math.random()*numbers.length)];
    //     ran  +=  lowers[Math.floor(Math.random()*lowers.length)];
    //     ran  +=  Caps[Math.floor(Math.random()*Caps.length)];
    //     ran  +=  symbol[Math.floor(Math.random()*symbol.length)];
    //   }else{
    //     return;
    //   }
  
   
    // }
    // console.log(ran);  
    // }


    
        // console.log(ran);


        // function checkstatus(e){
        //     func();
        //     console.log(e.target.value);
        // }

        return(
            <div className={styles.div1}>
                <div>
                <input type="checkbox" className={styles.checbx} onChange={storevalue} value={label}></input>
                </div>
               <div>
               <p className={styles.include}>{label}</p>
               </div>
            </div>
        )
}

export default CheckBox;