import Toast from './Toast';

export default async function order(phone: string) {
  const url = 'https://dummyjson.com/users/addsds';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: phone,
      }),
    });
    const data = await response.json();
    new Toast('Ваш заказ находится в обработке, совсем скоро мы с вами свяжемся!', true).create();
  } catch (error) {
    new Toast('Что-то пошло не так, попробуйте еще раз...', false).create();
  }
}
