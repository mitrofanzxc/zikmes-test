export default class Toast {
  message: string;
  timerToast!: ReturnType<typeof setTimeout>;
  timerProgress!: ReturnType<typeof setTimeout>;

  constructor(message: string) {
    this.message = message;
    this.timerToast;
    this.timerProgress;
  }

  create() {
    const FORM = document.querySelector('.form') as HTMLFormElement;
    const SUBMIT_WRAPPER = document.querySelector('.submit-wrapper') as HTMLDivElement;
    const BUTTON_SUBMIT = FORM.querySelector('.form__submit') as HTMLButtonElement;
    const TOAST = document.createElement('div') as HTMLDivElement;
    TOAST.classList.add('toast');

    const TOAST_CONTENT = document.createElement('div') as HTMLDivElement;
    TOAST_CONTENT.classList.add('toast__content');
    TOAST.appendChild(TOAST_CONTENT);

    const TOAST_ICON = document.createElement('i') as HTMLElement;
    TOAST_ICON.classList.add('fa-solid', 'fa-triangle-exclamation', 'toast__icon');
    TOAST_CONTENT.appendChild(TOAST_ICON);

    const TOAST_TEXT = document.createElement('div') as HTMLDivElement;
    TOAST_TEXT.classList.add('toast__text');
    TOAST_CONTENT.appendChild(TOAST_TEXT);

    const TOAST_HEADER = document.createElement('span') as HTMLSpanElement;
    TOAST_HEADER.classList.add('toast__header');
    TOAST_HEADER.textContent = 'Ошибка';
    TOAST_TEXT.appendChild(TOAST_HEADER);

    const TOAST_MESSAGE = document.createElement('span') as HTMLSpanElement;
    TOAST_MESSAGE.classList.add('toast__message');
    TOAST_MESSAGE.textContent = this.message;
    TOAST_TEXT.appendChild(TOAST_MESSAGE);

    const TOAST_CLOSE = document.createElement('i') as HTMLElement;
    TOAST_CLOSE.classList.add('fa-solid', 'fa-xmark', 'toast__close');
    TOAST.appendChild(TOAST_CLOSE);
    TOAST_CLOSE.addEventListener('click', this.close);

    const TOAST_PROGRESS = document.createElement('div') as HTMLDivElement;
    TOAST_PROGRESS.classList.add('toast__progress');
    TOAST.appendChild(TOAST_PROGRESS);

    FORM.appendChild(TOAST);

    setTimeout(() => {
      BUTTON_SUBMIT.setAttribute('disabled', '');
      SUBMIT_WRAPPER.classList.add('submit-wrapper_disabled');
      TOAST.classList.add('toast_active');
      TOAST_PROGRESS.classList.add('toast_active');

      this.timerToast = setTimeout(() => {
        TOAST.classList.remove('toast_active');
      }, 1500);

      this.timerProgress = setTimeout(() => {
        TOAST_PROGRESS.classList.remove('toast_active');
        this.remove();
        BUTTON_SUBMIT.removeAttribute('disabled');
        SUBMIT_WRAPPER.classList.remove('submit-wrapper_disabled');
      }, 1800);
    }, 0);
  }

  remove() {
    const TOAST = document.querySelector('.toast') as HTMLDivElement | null;
    const TOAST_CLOSE = document.querySelector('.toast__close') as HTMLElement | null;

    if (TOAST_CLOSE) {
      TOAST_CLOSE.removeEventListener('click', this.close);
    }

    if (TOAST) {
      TOAST.remove();
    }
  }

  close() {
    const TOAST = document.querySelector('.toast') as HTMLDivElement | null;
    const TOAST_PROGRESS = document.querySelector('.toast__progress') as HTMLDivElement | null;

    clearTimeout(this.timerToast);
    clearTimeout(this.timerProgress);

    if (TOAST) {
      TOAST.classList.remove('toast_active');
    }

    if (TOAST_PROGRESS) {
      setTimeout(() => {
        TOAST_PROGRESS.classList.remove('toast_active');
      }, 300);
    }
  }
}
