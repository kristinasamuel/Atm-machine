#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance: number = 10000;
let myPin: number = 7424;
console.log("Welcome to the UBL Bank");

let pinAns: any = await inquirer.prompt([
  {
    name: "pincode",
    type: "number",
    message: "Enter your pin number.",
  },
]);
if (pinAns.pincode === myPin) {
  console.log("Your Pin code is correct");

let operationAns: any = await inquirer.prompt([
  {
    name: "operation",
    type: "list",
    message: "What do you want to do?",
    choices: ["Withdraw", "Checkbalance", "Fastcash"],
  },
]);
//if you select withdraw

if (operationAns.operation === "Withdraw") {
  let amountAns: any = await inquirer.prompt([
    {
      name: "amount",
      type: "number",
      message: " Please Enter The Amount you want to Withdraw.",
    },
  ]);
  // greater than and equall to operator
  if (amountAns.amount > myBalance) {
    console.log("Sorry!! You Have Insufficient Balance!!");
  } else {
    myBalance -= amountAns.amount;
    console.log(`${amountAns.amount} Withdraw Successfully`);
    console.log(`Your Remaining Balance is : ${myBalance}.`);
  }
}
// user select checkbalance
if (operationAns.operation === "Checkbalance") {
  console.log(`Your Balance Is : ${myBalance}`);
}
// user select fastcash

if (operationAns.operation === "Fastcash") {
  let fastcash: any = await inquirer.prompt([
    {
      name: "fast",
      type: "list",
      message: "Please Select The Amount You Want To Withdraw.",
      choices: [3000, 5000, 7000, 10000],
    },
  ]);
  if (fastcash.fast > myBalance) {
    console.log("Sorry You Have Insufficient Balance!!");
  } else {
    myBalance -= fastcash.fast;
    console.log(`${fastcash.fast} Withdraw Successfully.`);
    console.log(`Your Remaining Balance Is ${myBalance}`);
  }
}
}else {
    console.log("You Entered a Wrong Pincode !!")
}