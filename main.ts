#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"

console.log(chalk.yellow.bold("\n \t Welcome to my 'new project' = CURRENCY CONVERTER\n"));

//Define the list of currencies and their exchange rates

let exchange_rate:any={
"USD":1,  //main currency
"EURO":0.9, //Europiean currency (euro)
"JYP":113, // Japenese currency(Yen)
"CAD":1.3, //Cancdian dollar
"AUD":1.65, //Australian dollar 
"PKR":277.7, //Pakistan Rupees 
//Add more currnecy and their exchange rates

}
//prompt the user to select currensies to convert from end to

let user_answer = await inquirer.prompt([
{
name:"from_currency",
type:"list",
message:"Select the currency to convert from :",
choices:['USD',"EUR","JYP","CAD","AUD",'PKR']
},
{
name:"to_currency",
type:"list",
message:"Select the currency to convert into:",
choices:['USD',"EUR","JYP","CAD","AUD",'PKR']
},
{
    name:"amount",
    type:"input",
    message:"Enter the amount to convert :"
}
]);
 
//perform currency conversion by using formuls
let from_amount=exchange_rate[user_answer.from_currency]
let to_amount= exchange_rate[user_answer.to_currency]
let amount=user_answer.amount

//formula for conversion
let base_amount = amount / from_amount
let converted_amount= base_amount *to_amount
//display the converted amount
console.log(`Converted amount = ${chalk.green(converted_amount.toFixed(2))}`);




