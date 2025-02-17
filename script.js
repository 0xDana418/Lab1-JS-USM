/*
alert("Этот код выполнен из внешнего файла!");
console.log("Сообщение в консоли");
*/

/*
let userName = 'Dana';
let birthYear = 2003;
let isStudent = true;

console.log(`Имя: ${userName}\nГод рождения: ${birthYear}\nСтудент: ${isStudent}`);
*/

let score = prompt("Введите ваш балл:");

if (score >= 90) {
    console.log("Отлично!");
} else if (score >= 70) {
    console.log("Хорошо");
} else {
    console.log("Можно лучше!");
}

for (let i = 1; i <= 5; i++) {
    console.log(`Итерация: ${i}`);
}
