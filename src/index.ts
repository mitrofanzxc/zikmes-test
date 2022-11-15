import './index.scss';

const buttonSubmit = document.querySelector('.form__submit') as HTMLInputElement;

function submit(event: Event) {
  event.preventDefault();
}

buttonSubmit.addEventListener('click', submit);
