let num = parseInt(prompt("Enter the num"));

if (num % 3 == 0) {
  alert("tic");
} else if (num % 5 == 0) {
  alert("tac");
} else if ((num % 3 !== 0) & (num % 5 !== 0)) {
  alert("tic tac toe");
}
