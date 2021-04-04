// Напиши скрипт создания и очистки коллекции элементов.
//Пользователь вводит количество элементов в input и нажимает 
//кнопку Создать, после чего рендерится коллекция.При нажатии 
//на кнопку Очистить, коллекция элементов очищается.
//Создай функцию createBoxes(amount), которая принимает
//1 параметр amount - число.Функция создает столько div, сколько 
//указано в amount и добавляет их в div#boxes.
//Каждый созданный div:
//-Имеет случайный rgb цвет фона
//-Размеры самого первого div - 30px на 30px
//-Каждый следующий div после первого, должен быть шире и выше 
//предыдущего на 10px
//Создай функцию destroyBoxes(), которая очищает div#boxes

const inputEl= document.querySelector('#controls input');
const renderEl = document.querySelector('button[data-action="render"]');
const destroyEl = document.querySelector('button[data-action="destroy"]');
const boxesEl = document.querySelector('#boxes');


const createBoxes = amount => {
    const newBox = document.createElement('div');

    boxesEl.append(newBox);
    // for (let i = 1; i <= amount; i+=1){
    //     boxesEl.appendChild(newBox);
    // }
};

const addRenderEl = renderEl.addEventListener('click', createBoxes);

const removeBoxes = () => {
    boxesEl.innerHTML = "";
};

const cleanBoxes = destroyEl.addEventListener('click', removeBoxes);
