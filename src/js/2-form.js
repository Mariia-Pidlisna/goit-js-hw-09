const formData = { email: "", message: ""};
const KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem(KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener("input", handleInput);

function handleInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  form.reset();
  localStorage.removeItem(KEY);
  formData.email = "";
  formData.message = "";
}


// Оголоси поза будь-якими функціями об’єкт formData з полями 
// email та message, які спочатку мають порожні рядки як 
// значення: { email: "", message: "" }.
// Використовуй метод делегування для відстеження змін у формі 
// через подію input. Зберігай актуальні дані з полів email та 
// message у formData та записуй цей об’єкт у локальне сховище. 
// Використовуй ключ "feedback-form-state" для зберігання даних 
// у сховищі.
// При завантаженні сторінки перевір, чи є дані у локальному сховищі. Якщо так, використовуй їх для заповнення форми та об'єкта formData. Якщо ні, залиш поля форми порожніми.
// Перед відправленням форми переконайся, що обидва поля форми 
// заповнені. Якщо будь-яке з полів (властивостей об’єкта formData)
//  порожнє, показуй сповіщення з текстом «Fill please all fields».
//   Якщо всі поля заповнені, виведи у консоль об’єкт formData з 
//   актуальними значеннями, очисти локальне сховище, об’єкт
//    formData і поля форми.