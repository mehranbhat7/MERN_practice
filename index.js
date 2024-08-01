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

function wakeup(callback) {
  setTimeout(() => {
    console.log("i wake up at 6 o clock");
    callback();
  }, 3000);
}
function gym(call) {
  setTimeout(() => {
    console.log("leave for gym at 7");
    call();
  }, 3000);
}
function bath(call) {
  setTimeout(() => {
    console.log("after gym i take a bath");
    call();
  }, 3000);
}
function dressup(call) {
  setTimeout(() => {
    console.log("i get dressed for the college");
    call();
  }, 3000);
}
function travel(call) {
  setTimeout(() => {
    console.log("then i travel 5 kms towards college");
    call();
  }, 3000);
}
function study(call) {
  setTimeout(() => {
    console.log("then i study at college");
    call();
  }, 3000);
}
function sleep(call) {
  setTimeout(() => {
    console.log("i get tiered and then i sleep");
    call();
  }, 1000);
}
wakeup(() => {
  gym(() => {
    bath(() => {
      dressup(() => {
        travel(() => {
          study(() => {
            sleep(() => {});
          });
        });
      });
    });
  });
});
