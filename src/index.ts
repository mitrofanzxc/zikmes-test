import './index.scss';

const FORM = document.querySelector('.form') as HTMLFormElement;
const INPUT_TEL = FORM.querySelector('.form__input') as HTMLInputElement;
const BUTTON_SUBMIT = FORM.querySelector('.form__submit') as HTMLButtonElement;

const regexBY = /^\+?375(\s+)?\(?(17|29|33|44)\)?(\s+)?[0-9]{3}-?[0-9]{2}-?[0-9]{2}$/;
const regexRU = /^((8|\+7|7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

function submit(event: Event) {
  event.preventDefault();

  if (!INPUT_TEL.value) {
    createModalError('Введите свой номер телефона!');
  } else if (
    !regexBY.test(INPUT_TEL.value) ||
    (!regexRU.test(INPUT_TEL.value) && INPUT_TEL.value)
  ) {
    createModalError('Введите корректный номер телефона!');
  }
}

function createModalError(value: string) {
  const modal = document.createElement('div') as HTMLDivElement;
  modal.classList.add('form__modal');

  const icon = document.createElement('i') as HTMLElement;
  icon.classList.add('fa-solid', 'fa-triangle-exclamation');
  modal.appendChild(icon);

  const message = document.createElement('span') as HTMLSpanElement;
  message.textContent = ` ${value}`;
  modal.appendChild(message);

  FORM.appendChild(modal);
}

BUTTON_SUBMIT.addEventListener('click', submit);
