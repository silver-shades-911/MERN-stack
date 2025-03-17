// // ------> Qs-1 get greater elements of array than num

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let num;

// function getGreater(arr, num) {
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > num) {
//       console.log(arr[i]);
//     }
//   }
// }

// getGreater(array, 8);

// // ----------> Qs-2 duplicate character remover

// let str = "aaabcccdddccc";

// function removeDuplicate(str) {
//     let result = ""; // Initialize an empty string to store the non-duplicate characters

//     for (let i = 0; i < str.length; i++) {
//         let isDuplicate = false;
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 isDuplicate = true;
//                 break; // Exit the inner loop once a duplicate is found
//             }
//         }
//         if (!isDuplicate) {
//             result += str[i]; // Append non-duplicate characters to the result
//         }
//     }

//     console.log(result);
// }

// removeDuplicate(str);

// // Shradha Ma'am solution

// let str = "abcdabcdefgggh";

// function getUnique(str) {
//   let ans = "";
//   for (let i = 0; i < str.length; i++) {
//     let currChar = str[i];
//     if (ans.indexOf(currChar) === -1) {
//       // If the current character is not already in 'ans', add it
//       ans += currChar;
//     }
//     // Otherwise, it's a duplicate, so skip it
//   }
//   return ans;
// }

// const result = getUnique(str);
// console.log("Unique characters:", result);

// // ---------> Qs-3 longest element giver

// function longestElement(arr) {
//     let longest = ""; // Initialize with an empty string

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length > longest.length) {
//             longest = arr[i]; // Update longest if the current string is longer
//         }
//     }

//     return longest; // Return the longest string
// }

// const inputArray = ["chickoo", "dragon-fruit", "Mango", "Apppple", "Pineapple"];
// const result = longestElement(inputArray);
// console.log("Longest string:", result);

// // ----------> Qs-example for understanding switch

// let amount = 80000;

// switch (true) {
// switch( Expression ) = switch(true) beacuse we put all comapring operation in each case's otherwise
// syntax
// case (value) :  that expression == value are directly compare
//   case 1:
//     amount >= 7500 && amount < 10000;
//     console.log("PlayStation 3");
//     break;
//   case 2:
//     amount >= 10000 && amount < 15000;
//     console.log("Xbox 360");
//     break;
//   case 3:
//     amount >= 15000;
//     console.log("iMac");
//     break;
//   default:
//     console.log("No reward");
// }

// // --------> Qs-4 vowel counter

// let str = "abcdehhhkoui";

// let count = 0;

// function vowel_count(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         count += 1;
//         break;
//       default:
//         break;
//     }
//   }
//   return count;
// }

// console.log("Count is equal to", vowel_count(str));

// // Shradha ma'am solution

// let str = "apnacollege";

// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "i" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// //------> Qs-5 random number InRange

// function getNumInrang(start, end) {
//   let rang = end - start + 1;

//   let randomNum = Math.floor(Math.random() * rang) + start;

//   return randomNum;
// }

// let start = 5;

// let end = 14;

// let result = getNumInrang(start, end);

// console.log(`The random number between ${start} and ${end} is : ${result}`);


// // ===============================================================================
// //Qs---> Practice Qs-1  Arrow function give square of "N"

// let square = (n) => {
//   let squ = n * n;
//   console.log(squ);
// };

// square(5);

// //Qs---->  Practice Qs-2  Arrow function printing hello world 5 times in the interval of 2 s

// let id = setInterval(() => {
//   console.log("Hello World");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
// }, 10000);

// //Qs 1 ---->   Arrow function that accepte array and give average of function

// // use of spread

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = (arr) => {
//   let add = 0;
//   let average = 0;

//   for (let i = 0; i < arr.length; i++) {
//     //  for (number of arr)

//     add += arr[i];
//   }

//   average = add / arr.length;

//   return average;
// };

// console.log(sum(arr));

// //Qs-2 ------>   isEven Arrow function

// let number = 10;

// let isEven = (number) => {

//   if (number % 2 == 0) {
//     console.log(`${number} is even number`);
//   }
//   else{
//     console.log(`${number} is odd number`);
//   }

// };

// isEven(5);

// // Qs- 3 ------------> Object and "this" problem with  setTimeout

// const object = {
//   message: "Hello World",
//   logMessage() {
//     console.log(this.message);
//   },
// };

// setTimeout(object.logMessage, 1000);

// output = NaN

// // <--------- Explanation -------->
// // After a delay of 1 second, undefined is logged to the console

// // While the setTimeout() function uses the object.logMessage as a callback,still,it
// // invokes object.logMessage as a regular function,rather than a method

// // And during a regular function invocation this equals the global object, which is a
// // window in the case of the browser environment

// // That's why console.log(this.message) inside logMessage method logs
// // window.message, which is undefined

// // Qs-4 --------->

// let length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };

// object.method(callback);

// // <-------- Explanation ------->

// // In our case,
// // it’s called as a regular function (not a method of an object).
// // So, this points to the global object (usually window in a browser).

// // <------------ Example to understand "this" ----------->

// function getThis() {
//   return this;
// }

// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };

// obj1.getThis = getThis;
// obj2.getThis = getThis;

// console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
// console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }


// // ===============================================================================
// // ARRAY METHODS

// // Ps-1 -----> Every()

// let num = [10, 20, 30, 40, 50, 60];

// let checker = num.every((num) => num % 2 === 0);

// // Ps-2 --------> reduce() that find min value in array

// let num = [10, 20, 30, 40, 50, 60];

// let checker = num.reduce((min, elm) => {
//   if (elm < min) {
//     return elm;
//   } else {
//     return min;
//   }
// });

// console.log(checker);

// // Qs-1 ------->

// let square = array.map((n) => n * n);
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = array.reduce((sum, ele) => (sum += ele), 0);

// let avg = (sum, array) => sum / array.length;

// console.log(array, square, sum, avg(sum, array));

// // Qs-2 ------->

// let plus5 = array.map((n) => n+5);

// console.log(plus5);

// Qs-3 -------> uppercase with

// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

// let allUperCase = fruits.map((fruit) => fruit.toUpperCase());

// console.log(allUperCase);

// // Qs-4 -------->

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function doubleAndReturnArgs(array, ...num) {
//   let array2 = array.map((i) => i * 2);
//   let num2 = num.map((n) => n * 2);

//   let resultarray = [...array2, ...num2];

//   console.log(resultarray);
// }

// doubleAndReturnArgs(array, 20, 30, 40, 50, 60, 70, 80, 90);

// //Qs-5 -----> Merging objects

// let obj1 = {
//   1: "Mercadies",
//   2: "BMW",
// };

// let obj2 = {
//   3: "Ferrari",
//   4: "Mcleral",
// };

// function combineObj (obj1, obj2) {

//     let megaobj ={ ...obj1, ...obj2};
//     console.log(megaobj);
// }

// combineObj(obj1, obj2);

// // alternative apporoch by using assign

// let megaobj = Object.assign({}, obj1, obj2);

// console.log(megaobj);


// let months = ["january", "july", "march", "augest"];

// months.splice(0, 1);
// months.splice(1, 0, "june");

// // shardha ma'am used

// months.splice(0, 2, "july", "june");
// console.log(months);

// let languages = [
//   "c",
//   "c++",
//   "html",
//   "javascript",
//   "python",
//   "java",
//   "c#",
//   "Sql",
// ];

// let result = languages.reverse().indexOf("javascript");

// console.log(result);
