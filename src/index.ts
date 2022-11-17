import Toast from './utils/Toast';
import './index.scss';

const FORM = document.querySelector('.form') as HTMLFormElement;
const INPUT_TEL = FORM.querySelector('.form__input') as HTMLInputElement;
const BUTTON_SUBMIT = FORM.querySelector('.form__submit') as HTMLButtonElement;

const regexBY = /^\+?375(\s+)?\(?(17|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/;
const regexRU = /^((8|\+?7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

function submit(event: Event) {
  event.preventDefault();

  if (!INPUT_TEL.value) {
    new Toast('Введите свой номер телефона!').create();
  } else if (
    (!regexBY.test(INPUT_TEL.value) || !regexRU.test(INPUT_TEL.value)) &&
    INPUT_TEL.value
  ) {
    new Toast('Введите корректный номер телефона!').create();
  } else {
    new Toast('Ваш заказ находится в обработке, совсем скоро мы с вами свяжемся!').create();
  }
}

FORM.addEventListener('submit', submit);
BUTTON_SUBMIT.addEventListener('click', submit);
