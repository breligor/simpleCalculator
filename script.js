const calc = document.createElement('div'); // тело калькулятора
calc.className = 'calc';
document.body.appendChild(calc);

const display = document.createElement('div'); // экран
display.className = 'display';
display.innerHTML = '';
calc.append(display);

const arrSymbol = [7,8,9, '+', 4,5,6, '-', 1,2,3,'*', 0, '.', '/','AC', 'del', '=']; //все символы
const arrBtn= [];

class Btns {                            //класс для кнопок
    constructor(element, label) {
        this.element = element;
        this.label = label;
        element.innerHTML = label;
    }
    toString(){
        return this.element;
    }
}

for (let i = 0; i < arrSymbol.length; i++){                             //создаем элементы через цикл
    let button = document.createElement('button');
    button.classList.add('btn');
    if ( typeof arrSymbol[i] === 'number' ) {
        arrBtn[i] = new Btns (button, arrSymbol[i]);
        button.classList.add('num');
    }
    else { arrBtn[i] = new Btns (button, arrSymbol[i]);
    }
    calc.append(arrBtn[i].toString());
                                                                        //добавляем нужные классы
    if (arrSymbol[i] === 'AC') {button.classList.add('clear');}
    if (arrSymbol[i] === 'del') {button.classList.add('delLastSymbol');}
    if (arrSymbol[i] === '=') {button.classList.add('equal');}
    if (arrSymbol[i] === 0) {button.classList.add('null');}
    if (arrSymbol[i] === '/' || arrSymbol[i] === '*' || arrSymbol[i] === '-' || arrSymbol[i] === '+') {button.classList.add('oper');}
}

function delLastSymbol() {                                                  //удаление последнего символа
    result.innerText = result.innerText.slice(0, -1);
    }

function allClear() {                                                       // AC
    result.innerText = "";
 }

const result = document.querySelector('.display');

calc.addEventListener('click', function (e) {          // подсчет

    if (!e.target.classList.contains('btn')) return;                    // проверка если клик не на кнопке

    const value = e.target.innerText;

    switch (value) {
        case 'del':
            delLastSymbol();
            break;
        case 'AC':
            allClear();
            break;
        case '=':
            result.innerText = eval(result.innerText);
            break;
        default:
            result.innerText += value;
            console.log(result.innerText);
    }
});

