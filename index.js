#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellow(`\t<<<<<<<<===========================>>>>>>>>`));
console.log(chalk.bold.blue(`\t Welcome to the project, Currency Converter`));
console.log(chalk.bold.yellow(`\t<<<<<<<<===========================>>>>>>>>`));
//Define the list of currencies and their exchange rates
let exchange_rate = {
    USD: 1,
    PKR: 278.37,
    EUR: 0.93,
    JPY: 0.0,
    GBP: 1.24,
    AUD: 1.53,
    CAD: 1.36,
    CHF: 0.91,
    CNH: 7.27,
    HKD: 7.82,
    NZD: 1.68, //New Zealand dollar
};
//prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.bold.green("Select the currency to convert from :"),
        choices: ["USD", "PKR", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNH", "HKD", "NZD",],
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.bold.green("Select the currency to convert into :"),
        choices: ["USD", "PKR", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF", "CNH", "HKD", "NZD",],
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
