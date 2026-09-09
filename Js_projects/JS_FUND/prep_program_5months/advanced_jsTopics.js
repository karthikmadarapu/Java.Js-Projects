// Try - catch block 
 const brokenJson = '{"name": "Alice", "age": 25'; 

 let data;
 try{
    data = JSON.parse(brokenJson);
     
 }
 catch(err){

    console.log("error captured gracefully : ", err.message);

    data = {error : true};
 }

 console.log("final application data status : ", data);



//  Strip Club entry Bouncer
let age;
 try {
  age = 18;

  if(age < 19) throw new Error(`your age must be 19+ to enter the CLUB`);



  console.log(`Access Granted`);

 }

 catch(error){

    console.log(`error caught successfully :`, error.message);

 }


//  Loading animation for the App 
 
let isLoading = true;

try{
    throw new Error (`an unexpected error occured, server crashed!`);
}
catch(error){
    console.log(`error caught gracefully: `, error.message);
}

finally{
    isLoading = false;
}

console.log(`spinner animation turned off successfully: `, isLoading);

// calculator dividing by zero 

function calc(a, b){
    if(b === 0) throw new Error(`cannot divide by zero!`);
    else  return a/b ;
}

try{
    calc(10, 0);

}
catch(error){
    console.log(`error captured successfully: `, error.message);
}

//  The "Missing Database Value"

let user = null;

try{
   
    console.log(user.phone);
    throw new Error(`user object null!`);
}
catch(error){

    console.log(`successfully captured error!`, error.message);
   user = {user: null};

}
// try catch grind

const invalidList = undefined;
try {
    console.log(invalidList.length);
}
catch(error){

    console.log("message captured", error.message);
}
finally{
    console.log("Validation check complete");
}

// try catch block for user profile
const user_01 = { id: 101, profile: null };

try{

    console.log(user_01.profile.phone);
}
catch(err){
    console.log("phone no. not provided", err.message);

}

// HTTP STATUS CODE PARSER

function checkStatus(code){
    if(code === 404) throw new Error ("Page not found");

    else if(code === 505 ) throw new Error ("server error");
    else  throw new Error("wrong number");
}

try {
    checkStatus(1139);
}
 catch(error){
    console.log(error.message);
 }


//  Promise function 
const burger_factory = new Promise((resolve, reject) => {
const iskitchenStocked = true;

if(iskitchenStocked) resolve("🍔 Here is your hot burger!");

else reject ("ran out of ingredients");

});


burger_factory.then((food) => console.log("Success:", food));
burger_factory.catch((error) => console.log("error shown: ", error));


// delaying message 

const fetchUser = new Promise((resolve) => {
  setTimeout(() => {
     
    resolve("welcome DEV!");
  }, 2000);
});

fetchUser.then((success) =>console.log("success: ", success));


// try catch grind 

function parseInteger(str){
    
    const convertTheNum = Number(str);

    if(Number.isNaN(convertTheNum))  throw new Error( "wrong format num ");

    return convertTheNum;

}

try{
   const result =  parseInteger("45x");
   console.log("successfully passed the function", result);
    

}
catch(err){
   console.log("Error caught gracefully:", err.message);
}
finally{
    console.log("Validation execution complete.");
}

// fetching user Image
const fetchUserImg = new Promise((resolve) =>{
     resolve("🖼️ Image Loaded");

});

fetchUserImg.then((success) => console.log("success : ",success));



// Try catch practice speedrun 

function printHi( age, name){   // only users who are 18 or up can print hi 
    if(age < 18){
      console.log(`HI ${name}!`);
    }
    else{
        console.log(`sorry loser_jajaja!`);
    }
    return `DEFAULT!`
}



try{
    printHi($$$$$);
}
catch(error){
    console.log("error caught gracefully: ", error.message);

}
finally{


console.log(`I'LL print no matter what!`);
}
// Query database question 
const queryDatabase = new Promise((resolve, reject) => {
    // 1. Roll a random number between 0 and 1
    const coinFlip = Math.random() > 0.5;

    if(coinFlip === true) resolve("📁 Records Found");
    else reject(new Error("Database disconnected"));
    // 2. Use your if/else logic here to resolve or reject the promise!
});

queryDatabase
            .then((success) => console.log("success: ", success))
            .catch((fail) => console.log("failure: ", fail.message));

// 3. Consume the promise layout using your .then().catch().finally() loops!




// DataBase checker promise 

const checkSubscription = new Promise((resolve, reject) => {

    const dataBaseOnline  = true;
    const isUser = true;
 

    setTimeout(() =>{
    if(!dataBaseOnline) {
        reject("Database server is offline");

    }
    else if(isUser){
        resolve({ user: "Karthik", status: "Premium" });
    }
    else{
        reject("User is not a premium subscriber.");
    }

    },2000);
});


checkSubscription

.then((success) => {

    console.log(`success: welcome back ${success.user} is ${success.status}`);
})

.catch((fail) =>{
        console.log(`⚠️ Error: ${error}`);
});



//CALLBACK FUNCTIONS 

const sendAsEmail = (message) => console.log(`📧 Sending Email: ${message}`);
const sendAsSMS = (message) => console.log(`📱 Sending Text Message: ${message}`);


function userNotify (usermessage, alertCallback){

        console.log("Processing alert system files...");
        alertCallback(usermessage);
}

userNotify("product shipped successfully", sendAsEmail);
userNotify("product shipped successfully", sendAsSMS);

