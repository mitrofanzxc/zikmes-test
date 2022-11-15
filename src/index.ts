import './index.scss';

const INPUT_SUBMIT = document.querySelector('.form__submit') as HTMLInputElement;

function submit(event: Event) {
  event.preventDefault();
}

INPUT_SUBMIT.addEventListener('click', submit);
