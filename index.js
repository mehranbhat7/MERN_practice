// const colorPicker = document.getElementById("textcolor");
// const canvasColor = document.getElementById("background");
// const canvas = document.getElementById("canvas");
// const undoButton = document.getElementById("retrieve");
// const clearButton = document.getElementById("clear");
// const saveButton = document.getElementById("save");
// const fontPicker = document.getElementById("fontsize");

// const ctx = canvas.getContext("2d");

// // Ensure the canvas is properly sized
// canvas.width = canvas.offsetWidth;
// canvas.height = canvas.offsetHeight;

// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;

// // Set default font size
// ctx.lineWidth = fontPicker.value;

// colorPicker.addEventListener("change", (event) => {
//   ctx.strokeStyle = event.target.value;
//   ctx.fillStyle = event.target.value;
// });

// canvasColor.addEventListener("change", (event) => {
//   ctx.fillStyle = event.target.value;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
// });

// fontPicker.addEventListener("change", (event) => {
//   ctx.lineWidth = event.target.value;
// });

// canvas.addEventListener("mousedown", (event) => {
//   isDrawing = true;
//   [lastX, lastY] = [event.offsetX, event.offsetY];
// });

// canvas.addEventListener("mousemove", (event) => {
//   if (!isDrawing) return;
//   ctx.beginPath();
//   ctx.moveTo(lastX, lastY);
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
//   [lastX, lastY] = [event.offsetX, event.offsetY];
// });

// canvas.addEventListener("mouseup", () => {
//   isDrawing = false;
// });

// canvas.addEventListener("contextmenu", (event) => {
//   event.preventDefault();
// });

// clearButton.addEventListener("click", () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// });

// saveButton.addEventListener("click", () => {
//   const image = canvas
//     .toDataURL("image/png")
//     .replace("image/png", "image/octet-stream");
//   const link = document.createElement("a");
//   link.download = "signature.png";
//   link.href = image;
//   link.click();
// });

// undoButton.addEventListener("click", () => {
//   const savedCanvas = localStorage.getItem("canvasContents");
//   if (savedCanvas) {
//     const img = new Image();
//     img.src = savedCanvas;
//     img.onload = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0);
//     };
//   }
// });

// // Save canvas contents to local storage
// saveButton.addEventListener("click", () => {
//   localStorage.setItem("canvasContents", canvas.toDataURL());
//   // Trigger download
//   const link = document.createElement("a");
//   link.download = "signature.png";
//   link.href = canvas.toDataURL();
//   link.click();
// });

// js practice MERN

// let katora1 = "Rajma dal";
// let katora2 = katora1;
// console.log(katora2);

// var address = "nawakadal";
// var address = "lalbazar";
// console.log(address);

// let name = "mehran";
// let name = "ali";
// console.log(name);

// function user() {
//   let age = 10;
//   console.log("hello");
// }
// user();
// console.log(age);

// let age = 23;
// console.log(typeof age);

// let name = "mehran";
// console.log(typeof name);

// let male = true;
// console.log(typeof male);

// let ress = null;
// console.log(ress);

// let eidi;
// console.log(typeof eidi);

// let num = "3" - null;
// console.log(num);
// console.log(typeof num);

// let res = "mehran";
// console.log(res);
// res = Boolean(res);
// console.log(typeof res);

// let num = 24;
// console.log(num++);
// console.log(num++);
// console.log(num++);
// console.log(num++);
// console.log(num++);
// console.log(num++);
// console.log(++num);

// let a = 2;
// let b = 6;
// console.log(a === b);
// console.log(a != b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

// console.log(3 < 1 || 1 < 5);
// console.log(3 > 1 && 2 > 9);
// console.log(5 == 5 && 5 > 2);

// let age = 19;
// let name = "nabli";

// if (age >= 18) {
//   if ((name = "nabla")) {
//     console.log("suu yi pahalgam");
//   } else {
//     console.log("nabla ius absent");
//   }
// } else {
//   console.log("su behi gharrei");
// }

// let agee = 23;
// switch (agee) {
//   case 10:
//     console.log("your are is below 10");
//     break;
//   case 23:
//     console.log("your age is below 20");
//     break;
//   case 30:
//     console.log("your age is under 30");
//     break;
//   default:
//     console.log("thats it");
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`2 * ${i} = ${2 * i}`);
// }

// let agge = 1;
// while (agge <= 0) {
//   console.log(`2 * ${agge} = ${2 * agge}`);
//   agge++;
// }

// let i = 4;
// do {
//   console.log(i);
//   i++;
// } while (i <= 1);

// function user() {}
// for (let i = 0; i <= 10; i++) {
//   console.log(user());
// }

// function xxy(a, b, c) {
//   return a + b + c;
// }
// let j = 5;
// let h = 6;
// let res = xxy(j, h, 4);
// console.log(res);

// (function () {
//   console.log("kaise ho");
// })();

// let userr = (a, b, c) => {
//   return a + b + c;
// };
// console.log(userr(1, 2, 3));

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// nums.push(11);
// console.log(nums);

// let numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numss.pop();
// console.log(numss);

// let numsss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numsss.shift();
// console.log(numsss);

// let numms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numms.unshift(0);
// console.log(numms);

// let nnums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// nnums.splice(0, 4, "mehraqn");
// console.log(nnums);

// let nuums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// nuums.slice(1, 5);
// console.log(nuums);

// let hi = [10, 20, 30, 40, 50];
// for (i = 0; i < hi.length; i++) {
//   console.log(hi[i]);
// }

// let hii = [10, 20, 30, 40, 50];
// let a = hii.map((val, inx, aRR) => {
//   return val, inx;
// });
// console.log(a);

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };
// for (let val in obj) {
//   console.log(obj[val]);
// }

// const arr = [10, 20, 30, 40, 50, 60];
// for (let vals of arr) {
//   console.log(vals);
// }

// let arr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
// console.log(arr[2][2]);

// for (let res of arr) {
//   for (let ress of res) {
//     console.log(ress);
//   }
// }

// let arr1 = ["mehran", "aki", 23];
// let arr2 = ["huzaif", "aqib", 9];
// let res = [...arr1, ...arr2];
// console.log(res);

// arr1 = ["mehran", 25];
// res = arr1;
// console.log(res);

// let arr1 = ["mehran", "huzaif", true, 98, "kiss"];
// let [name2, friend1, kuch, numbb, chummi] = arr1;
// console.log(kuch);

// let arr = ["mehran", "huzaif", true, 98, "kiss"];
// let [name, friend, ...rest] = arr;
// console.log(...rest);

// let person = {
//   name: "John",
//   age: 30,
//   greet: function () {
//     alert("kaise hoooo");
//   },
//   isStudent: false,
//   arr: [1, 2, 3, 4, 4, 5, 6, 6],
// };
// person.address = "ali jan raod";
// delete person.age;
// for (let val in person) {
//   console.log(person[val]);
// }

// let arr = [
//   { name: "mehran", age: 23 },
//   { name: "ali", age: 54 },
// ];
// for (let vasl of arr) {
//   console.log(vasl.name);
// }

// function userr() {
//   console.log("i am user1");
//   function user2() {
//     console.log("i am user 2");
//   }
//   user2();
// }
// userr();

// let a = 1;
// function greet() {
//
//   let a = 11;
//   console.log("this is function ist " + a);
//   function user() {
//     let a = 2;
//     console.log("this is user " + a);
//   }
//   user();
// }
// greet();

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr.length);

// let sert = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 9]);
// console.log(sert.size);

// let myMap = new Map([
//   ["name", "mehran"],
//   ["age", 22],
//   ["address", "nawakadal"],
// ]);
// myMap.set("gender", "male");
// console.log(myMap.size);

// const obj = {
//   name: "mehran",
//   age: 23,
//   address: "aalikadal",
//   fun: function () {
//     console.log(this.name);
//   },
// };
// obj.fun();
// console.log(obj.address);

// function greet() {
//   name = "ali";
//   return this.name;
// }
// console.log(greet());

// function User(name, address) {
//   this.name = name;
//   this.add = address;
//   this.greet = function () {
//     console.log(
//       `hello my name is ${name} and i live at ${address} , nice to meet you `
//     );
//   };
// }
// let user1 = new User("ali", "eidgah");
// let user2 = new User("aqib", "«jamalatta");
// user1.greet();
// user2.greet();

// let symm = Symbol("mehran");

// let obj = {
//   name: "mehrannnnnn",
//   [symm]: "my value",
// };
// console.log(obj[symm]);

// console.log("hii");
// console.log("my");
// setTimeout(() => {
//   console.log("name");
// }, 8000);
// console.log("is");
// console.log("mehran");

// function user(name) {
//   console.log("hii  how are you " + name);
// }
// setTimeout(user, 6000, "mehran");

// setTimeout(() => {
//   console.log("kaiose");
// }, 2000);
// setTimeout(() => {
//   console.log("hoo ");
// }, 4000);
// setTimeout(() => {
//   console.log("app");
// }, 5000);
// setTimeout(() => {
//   console.log("sabhi ");
// }, 8000);

// setTimeout(() => {
//   console.log("my ");
//   setTimeout(() => {
//     console.log("name");
//   }, 4000);
// }, 3000);

// function user() {
//   console.log("my name is user");
// }
// function user1() {
//   console.log("my name is user1");
// }
// function person(name, callback, call, caqll1, cqqlu) {
//   console.log("my name is " + name);
//   cqqlu();
//   callback();
//   call();
//   caqll1();
// }
// function user2() {
//   console.log("my name is user2");
// }
// function user3() {
//   console.log("my name is user3");
// }
// person("aqib", user, user1, user2, user3);

// function mobile(callb) {
//   setTimeout(() => {
//     console.log("use mobile");
//     callb();
//   }, 2000);
// }

// function loadingdata(call) {
//   setTimeout(() => {
//     console.log("1) data is loading...");
//     call();
//   }, 2000);
// }
// function fetchingdata(call) {
//   setTimeout(() => {
//     console.log("2) data is fetching...");
//     call();
//   }, 2000);
// }
// function approved() {
//   console.log("3) data approved");
// }
// mobile(() => {
//   loadingdata(() => {
//     fetchingdata(() => {
//       approved();
//     });
//   });
// });

// function wakeup() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("i wake up at 6 o clock");
//       res();
//     }, 3000);
//   });
// }
// function gym() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("leave for gym at 7");
//       res();
//     }, 3000);
//   });
// }
// function bath() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("after gym i take a bath");
//       res();
//     }, 3000);
//   });
// }
// function dressup() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("i get dressed for the college");
//       res();
//     }, 3000);
//   });
// }
// function travel() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("then i travel 5 kms towards college");
//       res();
//     }, 3000);
//   });
// }
// function study() {
//   return new Promise((res, rerj) => {
//     setTimeout(() => {
//       console.log("then i study at college");
//       res();
//     }, 3000);
//   });
// }
// function sleep() {
//   return new Promise((res, rejs) => {
//     setTimeout(() => {
//       console.log("i get tiered and then i sleep");
//       res();
//     }, 1000);
//   });
// }
// async function exe() {
//   await wakeup();
//   await gym();
//   await bath();
//   await dressup();
//   await travel();
//   await study();
//   await sleep();
// }
// exe().catch((err) => {
//   console.log(err);
// });
// let num = 0;
// function fun() {
//   num = num + 1;
//   console.log(num);
// }

// let inn = setInterval(fun, 1000);
// setTimeout(() => {
//   clearInterval(inn);
// }, 10000);
// "Use Strict";
// var name = "adil";

// var name = "mehran";

// var name = "abid";
// console.log(name);

// function user() {
//   console.log(name);
// }
// user();

// let name = "mehran";
// function usr() {
//   console.log(name);
// }
// usr();
// console.log(name);

// let n = 122323546;
// let str = "mehran";
// let bol = true;
// let nu = null;
// let un = undefined;

// let str = "mehrann , uidsghfuyw , weatwyegt m iuweugary3t";
// str = Number(str);
// console.log(typeof str);
// let bol = false;
// bol = String(bol);
// console.log(typeof bol);

// let a = 6;
// let b = 8;
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(--a);

// console.log(a != b);

// console.log(5 > 2 && 9 < 10);

// let name = "mehran";
// if (name.startsWith("mehrn")) {
//   console.log("correct user");
// } else if (name[0] === "m") {
//   console.log("he is inn");
// } else {
//   console.log("wrong user");
// }

// let names = "hatimfds";
// switch (names) {
//   case "mehran":
//     console.log("mehran entered");
//     break;
//   case "Ali":
//     console.log("Ali entered");
//     break;
//   case "hatim":
//     console.log("hatim entered");
//     break;
//   case "huzaif":
//     console.log("huzii entered");
//     break;
//   default:
//     console.log("unkown entered");
// }

// let namex = "mehran";
// for (let i = 0; i <= 10; i++) {
//   console.log(`19 * ${i} = ${19 * i}`);
// }
// let age = 40;
// while (age <= 50) {
//   console.log(age);
//   age++;
// }

// function user(age) {
//   console.log("i ma user " + age);
// }
// user(34);

// let uuser = function (age) {
//   console.log("i ma wser " + age);
// };
// uuser(11);

// (function (mobile) {
//   console.log("i ma wser55 " + mobile);
// })(74385872375);

// let man = (age, name) => console.log("mehraaaaan" + age + " " + name);
// man(998, "hishh");

// let fruits = ["apple", "mango", "banana", "orange", "grapes"];
// let vegs = ["tomato", "potato", "onion"];
// let res = fruits.concat(vegs);
// res.filter((res) => res.length >= 5);
// console.log(res);

// let nuum = [10, 20, 30, 40, 50, 60, 70];
// nuum.forEach((val, index, arr) => {
//   console.log(arr);
// });

// let obj = {
//   name: "mehran",
//   age: 22,
//   address: "nawakadal",
//   gender: "male",
//   user: function () {
//     console.log("tjis is a FUNCTION");
//   },
// };
// console.log(obj.user());
// for (let prop in obj) {
//   console.log(prop);
// }

// let arr = [10, 20, 30, 40, "gdgh", true, null];
// for (let val of arr) {
//   console.log(val);
// }

// let ar = [[1, 2, 3, 4, 5], ["hii"], [true, false]];
// for (let vals of ar) {
//   for (let res of vals) {
//     console.log(res);
//   }
// }

// let arr1 = [2, 34, 45, 6, 67];
// let arr2 = ["mehdsf", "assadgh", "hfwasfh"];
// res = [...arr1, ...arr2];
// console.log(res);

// let fruits = ["mango", "apple", "banana", "cherry"];
// let [one, two, three, four] = fruits;
// console.log(two);

// function userz() {
//   console.log("i am user ");
//   function userx() {
//     console.log("iam user ");
//   }
//   userx();
// }
// userz();

// let set = new Set[(1, 22, 3, 4, 5, 6, 7)]();
// console.log(set);

// function greet(name) {
//   console.log("time out sir " + name);
// }
// setTimeout(greet, 3000, "mehran");
// function goodmorning() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("good moorni8ng ");
//       res();
//     }, 2000);
//   });
// }
// function breakfast() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("its time to eat sir");
//       res();
//     }, 2000);
//   });
// }
// function lunch() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("its time to eat lunch sir");
//       rej("do not have lunch");
//     }, 2000);
//   });
// }
// function dinner() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("its time to eat dinner sir");
//       res();
//     }, 2000);
//   });
// }
// async function result() {
//   try {
//     await goodmorning();
//     await breakfast();
//     await lunch();
//     await dinner();
//   } catch (err) {
//     console.log(err);
//   }
// }
// result();

// let user1 = {
//   name: "ali",
//   age: 30,
//   address: "lalbazar",
//   gender: "male",
//   profession: "frontend",
// };
// let user2 = {
//   name: "Hazik",
//   age: 20,
// };
// user2.__proto__ = user1;
// console.log(user2.address);

// let user1 = {
//   name: "ali",
//   age: 30,
//   address: "lalbazar",
//   gender: "male",
//   profession: "frontend",
// };
// user2 = Object.create(user1);
// console.log(user2.gender);

// class User1 {
//   constructor(name) {
//     this.name = name;
//   }
//   kaam() {
//     console.log(`${this.name} is a frontend developer`);
//   }
//   work() {
//     console.log(`${this.name} works from home`);
//   }
// }
// class User2 extends User1 {
//   constructor(name) {
//     super(name);
//     this.name = name;
//   }
//   salary() {
//     console.log(`${this.name} takes 100k per anum`);
//   }
// }
// let useer = new User2("ali");
// useer.salary();

// class User1 {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`${this.name} welcome`);
//   }
//   static bye() {
//     console.log(`${this.name} bye bye`);
//   }
// }
// let user = new User1("mehran");
// User1.bye();

// class Game {
//   static scoree = 0;
//   constructor() {
//     this.playing = false;
//   }
//   start() {
//     this.playing = false;
//     console.log("game has started");
//   }
//   end() {
//     this.playing = false;
//     console.log("game has ended");
//     Game.score();
//   }
//   static score() {
//     Game.scoree++;
//     console.log(`${Game.scoree}`);
//   }
// }
// let gaem = new Game();
// gaem.start();
// gaem.end();
// gaem.end();
// gaem.end();
// gaem.end();

// function math(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("it is zero");
//     } else if (a / b === Infinity) {
//       throw new Error("it is infinity");
//     } else {
//       console.log(a / b);
//     }
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// math(10, 0);
// math(0, 10);

// fetch("https://fakestoreapi.co/products")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("an error occured");
//     }
//     return res.json();
//   })
//   .then((data) =>
//     data.forEach((element) => {
//       console.log(element.title);
//     })
//   )
//   .catch((error) => console.log(error));

// let a = document.getElementsByTagName("li");
// console.log(a);

// let b = document.getElementsByClassName("box");
// console.log(b);

// let c = document.getElementById("hi");
// console.log(c);

// let d = document.querySelector(".box");
// console.log(d);

// let e = document.querySelectorAll(".box");
// console.log(e);

// let a = document.querySelector(".child");
// let b = a.parentNode;
// console.log(b);

// let parent = document.getElementById("parent");
// let child = parent.lastChild;
// console.log(child);

// let a = document.querySelector(".b");
// let sib = a.nextSibling;
// console.log(sib);

let a = document.querySelectorAll(".box");
console.log(a);
