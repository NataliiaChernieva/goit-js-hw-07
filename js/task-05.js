// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector('#name-input');
let nameEl = document.querySelector('#name-output');
//console.log(nameEl.textContent);
//console.log(inputEl.textContent);

inputEl.addEventListener('input', (evt) => {
    evt.preventDefault;
    if (inputEl.value.length < 1) {
        nameEl.textContent = "незнакомец";
    } else {
    nameEl.textContent = inputEl.value;
}
    return nameEl;
});