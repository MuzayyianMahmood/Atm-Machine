#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Initialized Values
let balance = 1000;
let pin = 1234;

// Welcome Message
console.log(chalk.blue("\nWelcome to Muzayyian's ATM Machine!\n"));

let pinAnswer = await inquirer.prompt([
  {
    type: "number",
    name: "pin",
    message: "Please enter your PIN"
  }
]);

if (pinAnswer.pin === pin) {
  console.log("Login Successfully!");

  let purpose = await inquirer.prompt([
    {
      type: "list",
      name: "withdraworcheck",
      message: "what would you like to do?",
      choices: ["Withdraw Amount", "Check Balance",]
    }
  ]);

  if (purpose.withdraworcheck === "Check Balance") {
    console.log("Your Current Balance is " + balance);
  } else if (purpose.withdraworcheck === "Withdraw Amount") {
    let balanceCheck = await inquirer.prompt([
      {
        type: "number",
        name: "balance",
        message: "How much would you like to withdraw?"
      }
    ]);

    if (balanceCheck.balance <= balance) {
      let NewBalance = balance = balance - balanceCheck.balance;
      console.log(chalk.greenBright("Withdrawal Successful!"));
      console.log("Your Remaining Account Balance is " + NewBalance);
    } else {
      console.log("Insufficient Funds!");
      console.log(chalk.bgRedBright("\t\nMoye Moye\t\n"));
    }
  }
} else { 
  console.log(chalk.red("\nWrong PIN!\n"));
}
