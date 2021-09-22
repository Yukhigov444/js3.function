//1
function removeUser () {} //Удалить пользователя
removeUser()

function createPost () {} // Создать сообщения
createPost()

function addItem () {} // Добавить предмет
addItem()

function readFile () {} // Читать файл
readFile()

function getElements () {} // Получить элементы
getElements()

function createParentElement () {} // Создать родитеьский элемент
createParentElement()

function startGame () {} // Начать игру
startGame()

function sendMessage () {} // Отправить сообщения
sendMessage()


//2
function getThing (arr) {}

function receiveMessage (array) {}

function getName (a) {}

function getPassword (b) {}

function getLogin (a, b) {}

function getTheNumber (num) {}

function getWord (str) {}

function getLetter (num, str) {}

function getFigure (number) {}

function сalculations (text) {}



//3
function brothersName (name) {
    return name;
}

function sistersName (city) {
    return city;
}

function computerPasswoerd (youName) {
    return youName;
}

function laptopPassword (text) {
    return text;
}

function numberFemily (name) {
    return name;
}

function numberOfSister (name) {
    return name;
}

function NumberOfBrothers (name) {
    return name;
}

function numberOfFemily (text) {
    return text;
}

function userCode (text) {
    return text;
}

function userPassword (text) {
    return text;
}

function userLogin (city) {
    return city;
}


//4
function calculations (num) {
    return num * 2;
}
console.log(calculations(2))

function firstElement (arr) {
    return arr[0];
}
console.log(firstElement(['lorem', 'ipsum', 'ilyas', '748']))

function lastElement (arr) {
    return arr[arr.length-1];
}
console.log(lastElement(['lorem', 'ipsum', 'ilyas', '748']))















//Добавь комментарии к каждой строке следующего кода:

function printMyFullName(firstname, secondname) {  // Названия функции 'Показать мое полное имя'
    const fullname = `${firstname} ${secondname}`; // Названия переменной 'Полное имя'

    return fullname; // Возвращает полное имя
}

console.log(printMyFullName('into', 'code')); // Вызвали функции в консоль с параметрами


function getSumOfFirstAndLastElement(arr) {   // Получить сумму первого и последнего элемента
    if(arr.length < 2) {   // Если длина массива меньше 2
        return 'леее, минимум два элемента нужно жи есть'; // Возвращает строку '...'
    } else {  // Иначе
        const lastIndex = arr.length - 1;  // Последний индекс

        return arr[0] + arr[lastIndex]; // Возвращает: Первый элемент массива + Последний элемент массива
    }
}
console.log(getSumOfFirstAndLastElement([]); // В консоли вызвали функции ([ С пустым массивом ])

console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]); // В консоли вызвали функции ( С массивом [ 3, 7, 12, 8])




// Напиши к следующему коду комментарий, объясняющий почему функция возвращает "html" вместо "css".

//При вызове функции она первый очередь работает внутри функции и возвращает оттуда
let text = "css";

function testVariableScope() {
    let text = "html";

    return text;
}

console.log(testVariableScope());
