/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
  str = str.toLowerCase().replace(/[,! ]/g, ''); // Опускаем все символы в нижний регистр и заменяем знаки препинания и пробелы (глобально) на пустышки
  let i = 0; 
  let str1 = ''; // Создаем счетчик и переменную-заготовку для строки в обратном порядке
  while (i < str.length) { // Цикл обратного порядка символов
    str1 = str[i] + str1;
    i = i + 1;
  }
  if (str === str1) { // Сравнение исходной и обратной строки
    return true;
  } else {
    return false;
  }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 */ 
console.log(palindrome('О, лета тело!')); // true
