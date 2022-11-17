import Toast from './utils/Toast';
import validate from './utils/validate';
import order from './utils/order';
import './index.scss';

const FORM = document.querySelector('.form') as HTMLFormElement;
const INPUT_TEL = FORM.querySelector('.form__input') as HTMLInputElement;
const BUTTON_SUBMIT = FORM.querySelector('.form__submit') as HTMLButtonElement;

function submit(event: Event) {
  event.preventDefault();

  if (!INPUT_TEL.value) {
    new Toast('Введите свой номер телефона!', false).create();
  } else if (!validate(INPUT_TEL.value) && INPUT_TEL.value) {
    new Toast('Введите корректный номер телефона!', false).create();
  } else {
    order(INPUT_TEL.value);
    INPUT_TEL.value = '';
  }
}

FORM.addEventListener('submit', submit);
BUTTON_SUBMIT.addEventListener('click', submit);
