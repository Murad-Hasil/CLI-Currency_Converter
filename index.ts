#! /usr/bin/env node

import inquirer from "inquirer";
import chalk, { Chalk } from "chalk";

console.log(chalk.bold.yellow(`\t<<<<<<<<===========================>>>>>>>>`));
console.log(chalk.bold.blue(`\t Welcome to the project, Currency Converter`));
console.log(chalk.bold.yellow(`\t<<<<<<<<===========================>>>>>>>>`));

//Define the list of currencies and their exchange rates
let exchange_rate: any = {
  USD: 1, //US dollar, Base currency
  PKR: 278.37, // Pakistani Rupee
  EUR: 0.93, //Euro
  JPY: 0.0, //Japanese
  GBP: 1.24, //Pound sterling
  AUD: 1.53, //Australian dollar
  CAD: 1.36, //Canadian dollar
  CHF: 0.91, //Swiss franc
  CNH: 7.27, //Chinese renminbi
  HKD: 7.82, //Hong Kong dollar
  NZD: 1.68, //New Zealand dollar
};

//prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
  {
    name: "from_currency",
    type: "list",
    message: chalk.bold.green("Select the currency to convert from :"),
    choices: ["USD","PKR", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNH", "HKD", "NZD",],
  },
  {
    name: "to_currency",
    type: "list",
    message: chalk.bold.green("Select the currency to convert into :"),
    choices: ["USD","PKR", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNH", "HKD", "NZD",],
  },
  {
    name: "amount",
    type: "number",
    message: chalk.bold.green("Enter the amount to convert :"),
  },
]);


//ferform currency conversions by using formula
const from_amount = exchange_rate[user_answer.from_currency];
const to_amount = exchange_rate[user_answer.to_currency];
const amount = user_answer.amount;

//formula of conversion
const base_amount = amount / from_amount;
const converted_amount = base_amount * to_amount;
console.log(`Converted amount: ${chalk.bold.red(converted_amount.toFixed(2))}`);