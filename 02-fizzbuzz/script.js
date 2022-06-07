/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
  for (let i = 1; i = num; i++) {
    num % 3 ? console.log('fizz') : console.log(num);
    num % 5 ? console.log('buzz') : console.log(num);
    (num % 3) && (num % 5) ? console.log('fizzbuzz') : console.log(num);
  }
  
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));