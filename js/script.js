//23. Types

//1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
// const age = +prompt("How old are you?");
// if (age > 0 && age <= 12) {
//     alert("Your are a child");
// } else if (age > 12 && age < 18) {
//     alert("Your are a teenager");
// } else if (age >= 18 && age < 60) {
//     alert("Your are an adult");
// } else if (age > 60) {
//     alert("Your are a pencionist");
// };

//Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
// const num = +prompt("Enter a number X");
// switch (num) {
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;
//     case 0:
//         alert(")");
//         break;
//     default:
//         console.error("Wrong")
// }

//3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
// const num = prompt("Enter a number XXX");
// let a = num[0];
// let b = num[1];
// let c = num[2];

// if (a === b, a === c, b === c) {
//     alert("You have the same digits")
// } else {
//     alert("You have no repeated digits")
// };

//4.Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// const num = +prompt("Enter a year");
// if ((num % 400) == 0 || ((num % 4 == 0) && num % 100 !== 100)) {
//     alert("It is a leap year");
// } else {
//     alert("It is not a leap year");
// };

//5. Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
// const num = prompt("Enter a number XXXXX");
// a = num[0];
// b = num[1];
// c = num[2];
// d = num[3];
// f = num[4];
// if (a === f && b === d) {
//     alert("This is a polyander")
// } else {
//     alert("It is not a polyander");
// };

//6.Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// const usd = prompt("Enter amount of USD");
// const curr = prompt("Do you want to transferr to EUR, UAH or AZN?");
// eur = 0.9;
// uah = 27;
// azn = 1.7;
// switch (curr) {
//     case 'EUR':
//         alert(`You will get ${usd * eur} euro`);
//         break;
//     case 'UAH':
//         alert(`You will get ${usd * uah} uah`);
//         break;
//     case 'AZN':
//         alert(`You will get ${usd * azn} azn`);
//         break;
//     default:
//         alert("Wrong")
// }

//7.Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
// const sum = +prompt("Enter a sum you want to pay");
// if (sum >= 200 && sum < 300) {
//     alert(`You have to pay ${sum - sum * 0.03} with our sale`)
// } else if (sum >= 300 && sum < 500) {
//     alert(`You have to pay ${sum - sum * 0.05} with our sale`)
// } else if (sum >= 500) {
//     alert(`You have to pay ${sum - sum * 0.07} with our sale`)
// } else {
//     alert("Wrong number or no sale")
// };

//8. Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
// const s = +prompt("Enter a length of the circle");
// const p = +prompt("Enter a p of the square");
// if (p / 4 > s / 3.14) {
//     alert("Your cirlce can be inside of the square");
// } else {
//     alert("Your cirlce cannot be inside of the square");
// }

//9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
//___________________________---
// const question1 = +prompt("1+1=");
// const question2 = +prompt("100/10=");
// const question3 = +prompt("2*2=");

// if (question1 == 2 && question2 == 10 && question3 == 4) {
//     alert("Your score is 6");
// } else if ((question1 !== 2 && question2 == 10 && question3 == 4) || (question1 == 2 && question2 !== 10 && question3 == 4) || (question1 == 2 && question2 == 10 && question3 !== 4)) {
//     alert("Your score is 4");
// } else if ((question1 !== 2 && question2 !== 10 && question3 == 4) || (question1 == 2 && question2 !== 10 && question3 !== 4) || (question1 !== 2 && question2 == 10 && question3 !== 4)) {
//     alert("Your score is 2");
// } else {
//     alert("Your score is 0");
// }

//10.Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

// let d = +prompt('Enter day'),
//     m = +prompt('Enter month'),
//     y = +prompt('Enter year'),
//     isLeap = (y % 4 === 0 && y % 100 > 0) || y % 400 === 0;

// let lastDayOfMonth,
//     lastMonthOfYear = 12;

// if (isLeap && m === 2) {
//     lastDayOfMonth = 29;
// } else if (!isLeap && m === 2) {
//     lastDayOfMonth = 28;
// } else if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) {
//     lastDayOfMonth = 31;
// } else {
//     lastDayOfMonth = 30;
// }

// if (d !== lastDayOfMonth) {
//     d++;
// } else {
//     d = 1;
//     if (m !== lastMonthOfYear) {
//         m++;
//     } else {
//         m = 1;
//         y++;
//     }
// }

// console.log(`Next day is ${d}/${m}/${y}`);







































