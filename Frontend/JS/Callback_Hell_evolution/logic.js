// CALL-BACK HELL -----> async functions & await

// INDEX = 1) callback hell 2) solutions 3) Nesting 4) Promises 5) then & catch  6) promise chaining 7) async & await
//         8) Error throwing 9) error hangling  -> try and catch
// Above you get Different level of syntax to impliment dependent or async nature operaion with each others

// stage-1 How callback hell is created, basically simplest syntax
let h1 = document.querySelector("h1");

// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//   h1.style.color = "green";
// }, 2000);

// setTimeout(() => {
//   h1.style.color = "blue";
// }, 3000);

// stage -2 Making function for repetative work

// function colorChange(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }

// colorChange('red', 1000);
// colorChange('orange', 2000);
// colorChange('blue', 3000);

// stage -3 By using Callback nesting

// function colorChange(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange(); // in case when we not provide value for nextColorChange
//   }, delay);
// }

// colorChange("red", 1000, () => {
//   colorChange("blue", 1000, () => {
//     colorChange("pink", 1000, () => {
//       colorChange("green", 1000, () => {
//         colorChange("orange", 1000);
//       });
//     });
//   });
// });

// stage -3 Promises

// to understand promises let's take example of saving data in DB depend on network speed

// stage 3.1 simplest

// function saveToDb(data) {
//   let netSpeed = Math.floor(Math.random() * 10) + 1;
//   if (netSpeed > 4) {
//     console.log("Resolve = success");
//     console.log(netSpeed);
//   } else {
//     console.log("Reject = failure");
//     console.log(netSpeed);
//   }
// }

// stage 3.2 callback nesting

// function saveToDb(data, success, failure) {
//   let netSpeed = Math.floor(Math.random() * 10) + 1;
//   if (netSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// it's called "CALL-BACK HELL"
// saveToDb(
//   "data1",
//   () => {
//     console.log("Network speed is high : data 1 is saved");
//     saveToDb(
//       "data2",
//       () => {
//         console.log("data 2 is saved");
//         saveToDb(
//           "data3",
//           () => {
//             console.log("data 3 is saved");
//           },
//           () => {
//             console.log("data 3 is not save");
//           }
//         );
//       },
//       () => {
//         console.log("data 2 is not save ");
//       }
//     );
//   },
//   () => {
//     console.log("Network speed is slow : data 1 is not save");
//   }
// );

// stage 3.3 reform it using promise

// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let netSpeed = Math.floor(Math.random() * 10) + 1;
//     if (netSpeed > 4) {
//       resolve(" Network speed is high");
//     } else {
//       reject("Network speed is low ");
//     }
//   });
// }

// stage 3.4 using promise with then & catch

// we use it to do what after promise is resolve or rejected

// let request = saveToDb("data 1"); // request is our promise object

// request
//   .then(() => {
//     console.log("Next operation is performed , we are in then method");
//     console.log(request);
//   })
//   .catch(() => {
//     console.log("Next operation is failed, we are in catch method");
//     console.log(request);
//   });

// stage 3.5 Promise Chaining

// saveToDb("data1")
//   .then((result) => {
//     console.log("Data 1 : is saved");
//     console.log("Result :", result);

//     return saveToDb("data2"); // here we can use this also saveToDb("data2").then().catch();
//     //  but it look like callback hell ,so this is more efficient syntax
//   })
//   .then((result) => {
//     console.log("Data 2 : is saved");
//     console.log("Result :", result);

//     return saveToDb("data3");
//   })
//   .then((result) => {
//     console.log("data 3 : is saved");
//     console.log("Result :", result);
//   })
//   .catch((error) => {
//     console.log("Data is not saved");
//     console.log("Error :", error);
//   });

// stage 4 color change operation using promises

// function colorChange(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color is changed");
//     }, delay);
//   });
// }

// colorChange("red", 1000)
//   .then(() => {
//     console.log("color is changed to red ");
//     return colorChange("blue", 1000);
//   })
//   .then(() => {
//     console.log("color is change to blue");
//     return colorChange("pink", 1000);
//   })
//   .then(() => {
//     console.log("color is change to pink");
//     return colorChange("green", 1000);
//   })
//   .then(() => {
//     console.log("color is change to green");
//     return colorChange("orange", 1000);
//   })
//   .then(() => {
//     console.log("color is change to orange");
//   })
//   .catch(() => {
//     console.log("something is wrong color is not change");
//   });

// stage 5 - async functions

// async function saveMsg(data) {
//   let network = Math.floor(Math.random() * 10) + 1;
//   if (network > 5) {
//     return data;
//   } else {
//     throw new Error("Network speed is slow");
//   }
// }

// saveMsg("data 1")
//   .then((result) => {
//     console.log(result);
//     console.log("data 1 is saved");
//     return saveMsg("data 2");
//   })
//   .then((result) => {
//     console.log(result);
//     console.log("data 2 is saved");
//   })
//   .catch((error) => {
//     console.log(`Data could'nt be saved beacuse ${error}`);
//   });

// ERROR HANDLING using try &catch

// async function saveMsg() {
//   try {
//     let network = Math.floor(Math.random() * 10) + 1;
//     console.log(network);

//     if (network > 5) {
//       console.log("Data 1 is saved");
//       return "Network speed is high"; // Fix the typo here
//     } else {
//       throw new Error("Sorry, we couldn't save data; network speed is low");
//     }
//   } catch (error) {
//     console.error(error.message);
//     throw error; // Re-throw the error to be caught in the .catch block
//   }
// }

// Usage
// saveMsg()
//   .then((resolve) => {
//     console.log("Data 2 is saved");
//     console.log(resolve);
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

// stage 6 - async & await
// Promise always need to return

// function sendRnd() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let rnd = Math.floor(Math.random() * 10) + 1;
//       console.log(rnd);
//       resolve(` result - ${rnd}`);
//     }, 1000);
//   });
// }

// async function demo() {
//   await sendRnd();
//   await sendRnd();
//   await sendRnd();
//   await sendRnd();
// }

// stage 7 - color change function with the help of async and await 

// async function not explicitly return any thing

// async function colorChangeNext(color) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, 1000);
// }

// this function give batter way to control asynchronous nature
function colorChangeNext(color) {
 return new Promise (
  (resolve, reject)=>{
    setTimeout(() => {
      h1.style.color = color;
      resolve(`color is change to ${color}`);
    }, 1000);
  }
 );
}

async function colorChange (){
  await colorChangeNext("red");
  await colorChangeNext("blue");
  await colorChangeNext("green");
  await colorChangeNext("yellow");
  await colorChangeNext("orange");
  await colorChangeNext("pink");
  
}