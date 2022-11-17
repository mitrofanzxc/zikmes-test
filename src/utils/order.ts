import Toast from './Toast';

export default async function order(phone: string) {
  const url = 'https://dummyjson.com/users/add';
  const INPUT_TEL = document.querySelector('.form__input') as HTMLInputElement;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: phone,
      }),
    });
    const data = await response.json();
    new Toast('Cовсем скоро мы с вами свяжемся!', true).create();
    INPUT_TEL.value = '';
  } catch (error) {
    new Toast('Что-то пошло не так, попробуйте еще раз...', false).create();
  }
}
