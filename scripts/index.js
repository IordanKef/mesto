let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__close-button');
let form = document.querySelector('.form');
let username = document.querySelector('.profile__username');
let userRole = document.querySelector('.profile__user-role');
let newName = document.querySelector('.form__input-text_type_name');
let newRole = document.querySelector('.form__input-text_type_role');
let alertMessage = document.querySelector('.form__alert');

editButton.addEventListener('click', open_popup);
closeButton.addEventListener('click', close_popup);
form.addEventListener('submit', update_profile);

function open_popup() {
  popup.classList.add('popup_showed');
  newName.value = username.textContent;
  newRole.value = userRole.textContent;
}

function close_popup() {
  popup.classList.remove('popup_showed');
}

function show_alert() {
  alertMessage.classList.add('popup_showed');
}

show_alert();

function update_profile(evt) {
  evt.preventDefault();
  username.textContent = newName.value;
  userRole.textContent = newRole.value;
}
