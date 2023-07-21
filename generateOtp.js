

let otps = [];

const OTP = () =>{
    let digits = "0123456789";
    let otp ="";
    for(let i = 0; i < 6; i++){
        otp+=digits[Math.floor(Math.random()*10)];
    }

    return otp;
}

const generateUniqueOTP = () => {
   
   let otp = OTP();
    // 1 - chech if opt is in the array if not generate a new opt 
    let check = otps.includes(otp);
    // console.log(check)
    while (check){
        otp = OTP();
    }
    
    // return otp;
    otps.push(otp);

    return otp;
}



console.log(generateUniqueOTP());
console.log(generateUniqueOTP());

console.log(otps)