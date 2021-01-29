// even numbers
// for (i = 20; i > 0; i -= 2) {
//   console.log(i);
// }

// Odd numbers
// for (j = 1; j <= 20; j += 2) {
//   console.log(j);
// }
// for (j = 10; j > 0; j--) {
// //   console.log(j);
// // }

// for (i = 10; i <= 10000; i *= 10) {
//   console.log(i);
// }

// for (i = 25; i >= 0; i--) {
//   console.log(i);
// }

// for (i = 60; i >= 0; i -= 6) {
//   console.log(i);
// }

// let a = ["k", "i", "r", "a", "n", "m", "i", "y", "e", "r"];
// for (k = a.length - 1; k >= 0; k--) {
//   console.log(a[k].toUpperCase());
// }

// let people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let i = 0; i < people.length; i++) {
//   console.log(i, people[i].toUpperCase());
// }

let num = 0;
while (num < 10) {
  num++;
  console.log(num);
}

let k = 0;
const secret = "hybro";
let guess = prompt("Enter the secret");
while (guess !== secret) {
  for (k = 0; k < 3; k++) {
    guess = prompt("Enter the secret");
  }
}
console.log("congo you got the secret");
