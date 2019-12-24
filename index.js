'use strict'
function toggleBg() {
    //отслеживание комбинаций Shift + 9 && Shift + 0 для скобок
    if (event.shiftKey && event.keyCode == 57) {
        insert('(');
    } else if (event.shiftKey && event.keyCode == 48) {
        insert(')');
    }
    switch (event.keyCode) { //Перевод keycode в цифру
        case 96:
            insert(0);
            break;
        case 97:
            insert(1);
            break;
        case 98:
            insert(2);
            break;
        case 99:
            insert(3);
            break;
        case 100:
            insert(4);
            break;
        case 101:
            insert(5);
            break;
        case 102:
            insert(6);
            break;
        case 103:
            insert(7);
            break;
        case 104:
            insert(8);
            break;
        case 105:
            insert(9);
            break;
        case 111:
            insert('/');
            break;
        case 106:
            insert('*');
            break;
        case 109:
            insert('-');
            break;
        case 107:
            insert('+');
            break;
        case 107:
            insert('+');
            break;
        case 107:
            insert('+');
            break;
        case 13:
            equal();
            break;
        case 8:
            back();
            break;
        case 110:
            insert('.');
            break;
        default:
            break;
    };
}

document.addEventListener('keydown', function (event) {
    toggleBg();
});

function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
}

function insert(num) {
    document.form.textview.value =
        document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function back() {
    let sum = document.form.textview.value;
    document.form.textview.value = sum.substring(0, sum.length - 1);
}

function equal() { //Сюда надо добавить очистку поля ввода после выполненной операции
    let sum = document.form.textview.value;
    if (sum) {
        document.form.textview.value = eval(sum);
    };
}