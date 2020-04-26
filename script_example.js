// const number = prompt('Enter number');
// alert(number * number);
// Console.log(number);

// const number1 = Number(prompt('Enter number 1'));
// number2 = Number(prompt('Enter number 1'));
// alert((number1 + number2) / 2);

// const number = prompt('enter side length');
// alert('Square of kvadrat is ' + number * number);

// const convert = 0.621371;
// const km = +prompt('Enter km length');
// console.log(km * convert);

// const number1 = Number(prompt('Enter number 1'));
// number2 = Number(prompt('Enter number 1'));
// let result = '+ result is ${number + number2}';
// result += '\n- result is ${number - number2}';
// result += '\n* result is ${number * number2}';
// result += '\n/ result is ${number / number2}';
// console.log (result);

// const a = Number(prompt('Enter number 1'));
// b = Number(prompt('Enter number 1'));
// console.log(- b / a);

// const hour = Number(prompt('Enter hour'));
// min = Number(prompt('Enter min'));
// console.log(`Left ${24 - hour - 1} hours and ${60 - min} minutes`);

// const number = +prompt('Enter number xxx');
// const a = number % 100;
// const b = a % 10;
// const result = (a-b) / 10;
// console.log(result);

// const sum = +prompt('Enter sum');
// console.log('Employee`s salary is $${250 + sum * 0.1}');

// const number = +prompt('Enter number xxxxx');
// const secondPart = number % 10;
// const firstPart = (number - secondPart) / 10;
// // const newNumber = '' + secondPart + firstPart;
// const newNumber = String(secondPart) + String(firstPart);
// console.log(newNumber);

// const number = +prompt("Enter number");
// if (number > 0) {
//     console.log("Number > 0");
// else if ()
// }


// const number = +prompt("Enter number");
// if (number >= 0 && number <= 120) {
//     console.log("Correct");
// }
// else {
//     console.error("Wrong");
// }

// const number = +prompt ("Enter number");
// if (number >=0){
//     console.log( number);
// }
// else {
//     console.log (-number);
// }

// const h = +prompt("Enter hours");
// const m = +prompt("Enter minutes");
// const s = +prompt("Enter seconds");
// if (h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60) {
//     console.log(`Time is ${h}:${m}:${s}`);
// }
// else {
//     console.error("wrong");
// }

// const x = +prompt("Enter x");
// const y = +prompt("Enter y");
// let quarter;
// if (x > 0 && y > 0) {
//     quarter = 1;
// } else if (x < 0 && y > 0) {
//     quarter = 1;
// } else if (x < 0 && y > 0) {
//     quarter = 2;
// } else if (x < 0 && y < 0) {
//     quarter = 3;
// } else if (x > 0 && y < 0) {
//     quarter = 4;
// } else if (x === 0 && y > 0) {
//     quarter = "1 and 2";
// } else if (x === 0 && y < 0) {
//     quarter = "3 and 4";
// } else if (x > 0 && y === 0) {
//     quarter = "1 and 4";
// } else if (x < 0 && y === 0) {
//     quarter = "2 and 3";
// } else{
//     quarter = "Errow or cordinate start"
// }
// console.log (quarter);

// const number1 = +prompt("Enter number 1"),
//  number2 = +prompt("Enter number 2");
// switch(prompt("Enter number math action")){
//     case "+":
//         console.log(number1 + number2);
//         break;
//     case "-":
//         console.log(number1 - number2);
//         break;
//     case "/":
//         console.log(number1 / number2);
//         break;

//     case "*":
//         console.log(number1 * number2);
//         break;
//     default:
//         console.error("Wrong")
// }







//24. Cycle


//1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// let num1 = +prompt("Enter number 1");
// let num2 = +prompt("Enter number 2");
// sum = 0;
// while (num1 <= num2) {
//     sum += num1;
//     num1++;
//     console.log(sum)
// }

//2.Запросить 2 числа и найти только наибольший общий делитель.
// let num1 = +prompt("Enter number 1");
// let num2 = +prompt("Enter number 2");
// let a = num1\;

//3.Запросить у пользователя число и вывести все делители этого числа.

// let num = +prompt("Enter number"),
//     i = 1;
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         console.log(i);
//     };
// }

//4.Определить количество цифр в введенном числе.
// let num = +prompt("Enter number");
// alert(String(num).length)

//5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, 
// отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
//!!!! Problem with zero
// let i = 0,
//     positive = 0,
//     negative = 0,
//     zero = 0,
//     even = 0,
//     odd = 0;

// while (i < 10) {
//     let num = +prompt("Enter number");
//     if (num > 0) {
//         positive++
//     } else if (num < 0) {
//         negative++
//     } else (num === 0); {
//         zero++
//     };
//     if (num % 2 === 0) {
//         even++
//     } else {
//         odd++
//     }

//     i++
// }
// console.log(`You entered ${positive} positive numbers`);
// console.log(`You entered ${negative} negative numbers`);
// console.log(`You entered ${zero} null`);
// console.log(`You entered ${even} even numbers`);
// console.log(`You entered ${odd} odd numbers`);

//6.Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

// let i = confirm("Do you want to calculate?");

// while (i == true) {

//     const number1 = +prompt("Enter number 1"),
//         number2 = +prompt("Enter number 2");
//     switch (prompt("Enter number math action")) {
//         case "+":
//             console.log(number1 + number2);
//             break;
//         case "-":
//             console.log(number1 - number2);
//             break;
//         case "/":
//             console.log(number1 / number2);
//             break;

//         case "*":
//             console.log(number1 * number2);
//             break;
//         default:
//             console.error("Wrong")
//             break
//     }
//     break
// }

// while (i == false) {
//     alert("Ok")
//     break
// }
// let i = confirm("Do you want to calculate?");


//7. 

