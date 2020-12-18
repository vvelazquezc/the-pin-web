
import { pins } from './model/pin.js'


const $buttonSeach = document.querySelector('#seach')
const $wrapperContainer = document.querySelector('#container_principal')

$buttonSeach.addEventListener('click', createSearchBar)

function createSearchBar() {
    const $formSeach = document.createElement('form')
    $formSeach.classList.add('seach__wrapper')

    const $formSvg = document.createElement('div')
    $formSvg.classList.add('seach__logo')
    $formSvg.innerHTML = `<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7867 6.5C12.7867 9.53757 10.3242 12 7.28668 12C4.24912 12 1.78668 9.53757 1.78668 6.5C1.78668 3.46243 4.24912 1 7.28668 1C10.3242 1 12.7867 3.46243 12.7867 6.5ZM11.5158 11.4362C10.379 12.411 8.90163 13 7.28668 13C3.69683 13 0.786682 10.0899 0.786682 6.5C0.786682 2.91015 3.69683 0 7.28668 0C10.8765 0 13.7867 2.91015 13.7867 6.5C13.7867 8.11495 13.1977 9.59234 12.2229 10.7291L16.6402 15.1464L15.9331 15.8536L11.5158 11.4362Z" fill="#645D59"/>
        </svg>`
    $formSeach.appendChild($formSvg)
    const $formInputSeach = document.createElement('input')
    $formInputSeach.setAttribute("type", "text");
    $formInputSeach.setAttribute("placeholder", "Seach");
    $formInputSeach.classList.add('seach__input')
    $formSeach.appendChild($formInputSeach)

    $wrapperContainer.insertBefore($formSeach, $wrapperContainer.childNodes[0])

    const inputSeach = document.querySelector('.seach__input')

    inputSeach.addEventListener('keydown', e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            processTags(e.target.value);
            inputSeach.value = '';
        }
    });
}

pins.forEach((pin, ind) => {
    let indice = 0
    pin.tags.forEach((tags, ind) => {
        console.log(tags);
        indice = ind
    })
    
})

function processTags(valueInput, pins){
    let splitted = valueInput.split(' ');
    console.log(splitted);
    return splitted
}