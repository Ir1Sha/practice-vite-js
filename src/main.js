// TASK 1

// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабміті
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними для зміни.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.
// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

const LS_KEY = 'user-data';
const saveData = localStorage.getItem(LS_KEY);

const form = document.querySelector('.login-form');
const email = document.querySelector("[name='email']");
const password = document.querySelector("[name='password']");
const btn = document.querySelector('.login-form button');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (btn.textContent === 'Logout') {
    localStorage.removeItem(LS_KEY);

    btn.textContent = 'Login';
    form.reset();
    email.removeAttribute('readonly');
    password.removeAttribute('readonly');
    return;
  }

  if (!email.value.trim() || !password.value.trim()) {
    alert('Fill all fields');
    return;
  }

  if (
    USER_DATA.email !== email.value.trim() ||
    USER_DATA.password !== password.value.trim()
  ) {
    alert('Incorrect data');
    return;
  }

  localStorage.setItem(
    LS_KEY,
    JSON.stringify({
      email: email.value.trim(),
      password: password.value.trim(),
    })
  );

  btn.textContent = 'Logout';
  email.setAttribute('readonly', true);
  password.setAttribute('readonly', true);
}

if (saveData) {
  const parsedData = JSON.parse(saveData);

  email.value = parsedData.email || '';
  password.value = parsedData.password || '';

  btn.textContent = 'Logout';
  email.setAttribute('readonly', true);
  password.setAttribute('readonly', true);
}
// //////////////////////////////////////////////////////////

// ЗАДАЧА 2
// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const answer = Number(prompt("Enter smthing"));
// function check(answer) {
//     return new Promise((resolve, reject) => {
// if(isNaN(answer)) {
//     reject("error");

// }
// if(answer % 2 === 0) {
// setTimeout(() => resolve("even"), 1000);
// }
// if(answer % 2 !== 0) {
//     setTimeout(() => resolve("odd"), 2000)

// }
//     })
// }

// check(answer)
// .then((response) => console.log(response))
// .catch((err) => console.log(err))

//   ЗАВДАННЯ 3
// Додай відображення дати і часу в реальному часі

// const span = document.querySelector('.date span');

// function updateData() {
//   span.textContent = new Date().toLocaleString();
// }

// setInterval(updateData, 1000);

// updateData();

// ЗАВДАННЯ 4

// Напишіть функцію calculateAge(birthDate), яка приймає дату народження у форматі YYYY-MM-DD і повертає поточний вік.
// Підказка: Використайте об'єкт Date для обчислення різниці між сьогоднішньою датою і датою народження.

// function calculateAge(birthDate) {
//   const birth = new Date(birthDate);
//   const currentdate = new Date();

//   let years = currentdate.getFullYear() - birth.getFullYear();
//   const month = currentdate.getMonth() - birth.getMonth();
//   const days = currentdate.getDate() - birth.getDate();
//   // console.log(month,  days);
//   if (month < 0 || (month === 0 && days < 0)) {
//     years-=1
//   };
//   return years;

// }

// console.log(calculateAge("1998-11-20"));
// console.log(calculateAge("1998-11-26"));
// console.log(calculateAge("1998-12-15"));

const inputCheck = document.querySelector('#checkbox');
const savedThem = localStorage.getItem('them');
if (savedThem === 'dark') {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  inputCheck.checked = true;
}

inputCheck.addEventListener('change', handelChange);

function handelChange(event) {
  if (event.target.checked) {
    document.body.classList.add('dark');
    localStorage.setItem('them', 'dark');
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');
    localStorage.setItem('them', 'light');
    document.body.classList.remove('dark');
  }
}
// Створи перелік справ.
// Є інпут, в який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Список із завданнями має бути доступним після перезавантаження сторінки.
// * Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
