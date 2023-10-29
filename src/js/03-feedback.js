import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = 'feedback-form-state';

/**
 * init formData
 */
let formData = {};

/**
 * reset formData
 */
function resetFormData() {
  formData = { email: '', message: '' };
}

resetFormData();

/**
 * check localStorage
 */
if (localStorage.getItem(localStorageKey)) {
  formData = JSON.parse(localStorage.getItem(localStorageKey));
}

/**
 * set values from localStorage
 */
email.value = formData.email;
message.value = formData.message;

/**
 * add event listeners on inputs
 */
form.addEventListener(
  'input',
  throttle(evt => {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
  }),
  500
);

/**
 * add event listener on submit
 */
form.addEventListener('submit', evt => {
  evt.preventDefault();
  console.log(formData);
  resetFormData();
  localStorage.removeItem(localStorageKey);
  form.reset();
});
