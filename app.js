#!/usr/bin/env node
import inquirer from "inquirer";
let balance = 10000;
let Pin = 1234;
let condition = true;
let name = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your Name?",
});
console.log("**Welcome:", name.name);
console.log("The pin is 1234");
console.log("Enter card Number what you want to Type.");
let card = await inquirer.prompt({
    name: "card",
    type: "number",
    message: "Enter your card Number.",
});
if (card.card) {
    let pin = await inquirer.prompt({
        name: "pin",
        type: "number",
        message: "Enter your Pin!",
    });
    if (pin.pin === Pin) {
        while (condition) {
            let Atm = await inquirer.prompt([
                {
                    name: "select",
                    type: "list",
                    message: "select your choice?",
                    choices: ["Deposit", "Fast-cash", "Withdraw", "Check-balance", "Exit"],
                },
            ]);
            if (Atm.select === "Deposit") {
                let amount = await inquirer.prompt({
                    name: "amount",
                    type: "number",
                    message: "Enter your amount!",
                });
                balance += amount.amount;
                console.log(`Your balance is:  ${balance}`);
            }
            else if (Atm.select === "Withdraw") {
                let Withdram = await inquirer.prompt({
                    name: "deduct",
                    type: "number",
                    message: "How much amount you wanna withdraw?",
                });
                if (Withdram.deduct > balance) {
                    console.log("***Insufficient Balance***");
                }
                else {
                    balance -= Withdram.deduct;
                    console.log(`Your balance is: ${balance}`);
                    console.log("Withdraw Amount:", Withdram.deduct);
                }
            }
            else if (Atm.select === "Check-balance") {
                console.log("**YOur Current balance is:", balance);
                let ques = await inquirer.prompt({
                    name: "q",
                    type: "confirm",
                    message: "Do you want to add amount?",
                });
                if (!ques.q) {
                    condition = false;
                    console.log(`Your balance is: ${balance}`);
                }
                else {
                    let amount = await inquirer.prompt({
                        name: "add",
                        type: "number",
                        message: "Enter your amount?",
                    });
                    balance += amount.add;
                    console.log(`Your balance is ${balance}`);
                }
            }
            else if (Atm.select === "Exit") {
                condition = false;
                console.log("**Have a nice day***");
            }
            else if (Atm.select === "Fast-cash") {
                let fast = await inquirer.prompt({
                    name: "cash",
                    type: "list",
                    message: "Select your amount.",
                    choices: ["1000", "2000", "3000", "4000", "5000"]
                });
                if (fast.cash) {
                    balance -= fast.cash;
                    console.log(`Your Current balance is: ${balance}`);
                }
            }
        }
    }
    else {
        console.log("Invalid task");
    }
}
else {
    console.log("Enter your Card Number.");
}
