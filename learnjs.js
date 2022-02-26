// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в 
// середине должен работать для массивов с любой 
// длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
// 
// const styles = [`Джаз`, `Блюз`];
// console.log(styles);

// styles.push('Рок-н-ролл');
// console.log(styles);

// function swapMidArray () {
//     let swap = Math.ceil(styles.length/2 - 1);
//     styles[swap] = `Классика`;
// }

// swapMidArray ();
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift(`Рэп`,`Регги`);
// console.log(styles);
// ------------------
// Сумма введённых чисел
// важность: 4
// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//     let massive = [];
//     while (true) {
//         let value = prompt('Number?', 0);
//         if(value === " " || !isFinite(value) || value === null) break;          
//         massive.push(+value);
//     }
    
//     let sum = 0;
//     for (let number of massive) {
//     sum += number;
//     }
//     console.log(massive);
//     console.log(sum);
// }
// sumInput();

// ___________________________________________________

// Бинарный поиск

// const myMassive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function binarySearch (massive, goal) {
//     let low = 0;
//     let high = massive.length - 1;
//     let nothing = -1;
//     let middle = Math.floor((low+high)/2);
//     while (low <= high) {
//       if (middle == goal) {
//         return middle;
//       }else if (middle > goal) {
//           low = middle + 1;
//       }else{
//           high = middle - 1;
//       }
//     }
//     return nothing;
// }

// binarySearch(myMassive,5);

const massive = [-1, 2, 3, 7, 10];
let score;
for (let i = 0; i < massive.length; i++) {
    for (let j = i+1 ; j < massive.length; j++) {
        if (massive[i] + massive[j] == 9) {
            score = massive[i] + massive[j];
        }
    }
}
console.log(score);