//Счетчик состоит из спана и кнопок, которые должны увеличивать 
//и уменьшать значение счетчика на 1.
//Создай переменную counterValue в которой будет хранится текущее 
//значение счетчика.
//Создай функции increment и decrement для увеличения и уменьшения 
// значения счетчика Добавь слушатели кликов на кнопки, вызовы функций
// и обновление интерфейса.

const counterEl = document.querySelector("#counter");
const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');
const valueEl =document.querySelector('#value')
//console.log(addBtn);

let counterValue = 0;

const removeValue = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
    return valueEl;
}

const addValue = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
    return valueEl;
}

addBtn.addEventListener("click", addValue);
removeBtn.addEventListener("click", removeValue);
