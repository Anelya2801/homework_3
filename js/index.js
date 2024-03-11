// ex-1
//                   0                1              2
// const yodaSays = ['on JavaScript', 'programming', 'I like'];
// console.log(yodaSays[0] + ' ' + yodaSays[1] + ' ' + yodaSays[2]);


// ex-3

// const admin = prompt('Login');

// if (admin === 'admin') {
//     const password = prompt('Password?');

//     switch (password) {
//         case 'BlackOverlord':
//             alert('Welcome!');
//             break;
//         default:
//             alert('Wrong Password!');
//             break;
//     }
// }else if (!null) {
//     alert('Unknown user')
// }else {
//     alert('Login censeled')
// }


// ex-4

// const drinks = ['milk', 'beer', 'milk', 'beer', 'milk'];
// let i = 0;

// while (i < drinks.length) {
//     if (drinks[i] === 'milk') {
//         console.log('good');
//     } else if (drinks[i] === 'beer') {
//         console.log('bad');
//     }
//     i++;
// }


// ex-5


// const symbol = prompt('Vvedite symbol: ');

// let row = '';

// for (let i = 0; i < 7; i++) {
//     for (let j = 0; j < 20; j++) {
//         row += symbol;
//     }
//     row += '\n';
// }
// alert(row);

// ex-6

// const second = prompt('Для Петрова: ');
// console.log('Для Петрова: ' + second + ' секунд');
// const time = second/3600;

// if (time == 8){
//     console.log('Для сотрудниц: остается ' + time + ' часов');
// }else if (time == 2.5){
//     console.log('Для сотрудниц: остается ' + time + ' часов');
// }else if (time == 0){
//     console.log('Для сотрудниц: рабочий день закончился');
// }else {
//     console.log('остался ' + time + ' часа');
// }

// ex-7


// const random_first = Math.floor(Math.random() * 9) + 1;
// const random_second = Math.floor(Math.random() * 9) + 1;
// const table = prompt('What is ' + random_first + ' * ' + random_second + ' ?');

// const correctAnswer = random_first * random_second;
// if (table === null || table === "") {
//     alert("You are wrong");
// } else {
//     if (parseInt(table) === correctAnswer) {
//         alert("You are correct!");
//     } else {
//         alert("You are wrong");
//     }
// }

// доп ex-1
// const num1 = parseInt(prompt("Введите первое число:"));
// const num2 = parseInt(prompt("Введите второе число:"));

// if (num1 > num2) {
//     console.log(num1 + ' > ' + num2);
// } else if (num1 < num2) {
//     console.log(num1 + ' < ' + num2);
// } else {
//     console.log(num1 + ' = ' + num2);
// }

// ex-2

// const userBirthDate = prompt("Введите дату вашего рождения в формате ГГГГ-ММ-ДД:");
// const birthDate = new Date(userBirthDate);
// const currentDate = new Date();
// const dateMilliseconds = currentDate - birthDate;

// const dateSeconds = Math.floor(dateMilliseconds / 1000);
// const dateMinutes = Math.floor(dateSeconds / 60);
// const dateHours = Math.floor(dateMinutes / 60);
// const dateDays = Math.floor(dateHours / 24);
// const dateMonths = Math.floor(dateDays / 30); 
// const dateYears = Math.floor(dateDays / 365); 

// console.log(`Вы прожили ${dateYears} лет, ${dateMonths} месяцев, ${dateDays} дней, ${dateHours} часов, ${dateMinutes} минут и ${dateSeconds} секунд.`);


// ex-4

//  const numbers = [];
//  const sum = 0;
//  const count = 0;

// while (true) {
//     const input = prompt("Введите целое число от 1 до 100:");

//     if (input === null) {
//         if (count === 0) {
//             console.log("Вы не ввели ни одного числа.");
//         } else {
//             console.log(`Вы ввели ${count} чисел, их среднее арифметическое: ${sum / count}`);
//         }
//         break;
//     }

//     const number = parseInt(input, 10);

//     if (Number.isNaN(number) || number < 1 || number > 100) {
//         console.log("Некорректный ввод. Пожалуйста, введите целое число от 1 до 100.");
//         continue;
//     }

// }


// ex-7


// const number = prompt('Введите число')
// let firstHalfSum = 0;
// let secondHalfSum = 0;

// for (let i = 0; i < number.length / 2; i++) {
//     firstHalfSum += parseInt(number[i]);
// }

// for (let i = number.length / 2; i < number.length; i++) {
//     secondHalfSum += parseInt(number[i]);
// }

// if (firstHalfSum === secondHalfSum) {
//     console.log(`В числе ${number} суммы первой и второй половины цифр равны`);
// } else {
//     console.log(`В числе ${number} суммы первой и второй половины цифр не равны`);
// }
