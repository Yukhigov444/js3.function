//1
function getEven (a) {
    if (a % 2 === 0) {
        return 'Четное'
    }else {
        return 'Не четное'
    }
}
console.log( getEven(4))


//2
function positive (x) {
    if (x > 0) {
        return 'Положительное'
    }else {
        return 'Отрицательный'
    }
}
console.log(positive(2))


//3
function maxNum (a, x) {
    if (a > x) {
        return a;
    }else {
        return x;
    }
}
console.log(maxNum(10,20))


//4
function work (a, b) {
    return a * b;
}
console.log(work(2, 2))


//5
function numberSymbol (str) {
    return str.length;
}
console.log(numberSymbol('Я учусь в интокод'))


//6
function maxStr (str, name) {
    if (str.length > name.length) {
        return str;
    }else {
        return name;
    }
}
console.log(maxStr('Поехал на учубу', 'ilyas'))


//7
function minString (str, num) {
    return str.slice(0, num)
}
console.log(minString('Yukhigov', 3))


//8. Доработай предыдущую функцию так, чтобы, если кол-во символо меньше второго параметра, функция возвращала "текст слишком коротки".
function text (str, num) {
    if (str.length < num) {
        return 'Текст слишком короткий';
    }else {
        return str.slice(0, num);
    }
}
console.log(text('Yukhigov', 3))

