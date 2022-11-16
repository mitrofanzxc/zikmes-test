import './index.scss';

const FORM = document.querySelector('.form') as HTMLFormElement;
const INPUT_TEL = FORM.querySelector('.form__input') as HTMLInputElement;
const BUTTON_SUBMIT = FORM.querySelector('.form__submit') as HTMLButtonElement;
const MODAL = FORM.querySelector('.modal') as HTMLDivElement;
const MODAL_MESSAGE = MODAL.querySelector('.modal__message') as HTMLSpanElement;

const regexBY = /^\+?375(\s+)?\(?(17|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/;
const regexRU = /^((8|\+?7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

function submit(event: Event) {
  event.preventDefault();

  if (!INPUT_TEL.value) {
    createModal('Введите свой номер телефона!');
  } else if (
    (!regexBY.test(INPUT_TEL.value) || !regexRU.test(INPUT_TEL.value)) &&
    INPUT_TEL.value
  ) {
    createModal('Введите корректный номер телефона!');
  } else {
    createModal('Ваш заказ находится в обработке, совсем скоро мы с вами свяжемся!');
  }
}

function createModal(value: string) {
  MODAL_MESSAGE.textContent = ` ${value}`;
  MODAL.classList.add('modal_animation-create');
  setTimeout(() => MODAL.classList.remove('modal_animation-create'), 1000);
  setTimeout(() => MODAL.classList.add('modal_animation-remove'), 1000);
}

FORM.addEventListener('submit', submit);
BUTTON_SUBMIT.addEventListener('click', submit);

MODAL.addEventListener('animationstart', () => {
  BUTTON_SUBMIT.setAttribute('disabled', '');
});

MODAL.addEventListener('animationend', () => {
  BUTTON_SUBMIT.removeAttribute('disabled');
});
