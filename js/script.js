let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr3 = ['a', 'b', 'c', 'd', 'e', 'f'];
let arr4 = ['A', 'B', 'C', 'D', 'E', 'F'];
let arr5 = ['!', '@', '#', '$', '%', '&'];

// Ползунок - длина массива
document.getElementById('param-1').oninput = function () {
    document.getElementById('password-length').innerHTML = this.value;
}


document.getElementById('generator').onclick = generatePass;

// Генерирует пароль
function generatePass() {
    let result = [];
    if (document.getElementById('param-2').checked) {
        // включины ли цифры
        result = result.concat(arr2);
    }

    if (document.getElementById('param-3').checked) {
        // вкл. ли строчные буквы
        result = result.concat(arr3);
    }

    if (document.getElementById('param-4').checked) {
        // вкл. ли пропись
        result = result.concat(arr4);
    }

    if (document.getElementById('param-5').checked) {
        // спецсимволы
        result = result.concat(arr5);
    }

    // перемешиваем рез. массив 

    result.sort(compareRandom);
    document.getElementById('out').innerHTML = '';
    console.log(result);
    // будущий пароль

    for (let k = 0; k < 6; k++) {
        let pass = '';
        let passLength = parseInt(document.getElementById('param-1').value); //длина пароля 

        for (let i = 0; i < passLength; i++) {
            //цикл по длине пароля
            //выбираю случайное значение из массива result
            pass += result[randomInteger(0, result.length - 1)];
        }

        document.getElementById('out').innerHTML += '<p>' + pass + '</p>';//выводим результат на страницу
    }
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}