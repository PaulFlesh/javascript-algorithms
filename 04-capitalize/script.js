/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  let strWord = str.split(' '); // Создаем из строки массив, элементы которого разделены пробелом
  for (let i = 0; i < strWord.length; i++) { // Запускаем цикл, в котором первый символ каждого слова из массива переводится в верхний регистр
    strWord[i] = strWord[i].slice(0, 1).toUpperCase() + strWord[i].slice(1);
  };
  return strWord.join(' '); // Складываем полученный массив в строку
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"