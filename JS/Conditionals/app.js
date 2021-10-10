// let rating = 3;

// if (rating === 3){
//     console.log("You are a superstar");
// }

// let rand = Math.floor(Math.random() * 3 + 1);
// if (rand === 2){
//     console.log("Math still works")
//     console.log(rand);
// }
// else if (rand > 2){
//     console.log("Almost works...");
//     console.log(rand);
// }

// const dayOfWeek = "Monday";

// if (dayOfWeek === "Monday") {
//   console.log("I hate mondays");
// }
// else if (dayOfWeek === "Saturday") {
//   console.log("Finally");
// }
// else if(dayOfWeek === "Friday"){
//     console.log("Decent Enough");
// }

const age = parseInt(prompt("What's you age?"));

if (age < 5) {
  console.log("You are free to enter. No money needed");
} else if (age < 10) {
  console.log("Please pay 10$");
} else if (age < 65) {
  console.log("Please pay 20$");
} else {
  console.log("You are free to enter.");
}
