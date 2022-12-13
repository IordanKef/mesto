let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__close-button');
let form = document.querySelector('.form');
let username = document.querySelector('.profile__username');
let userRole = document.querySelector('.profile__user-role');
let newName = document.querySelector('.form__input-text_type_name');
let newRole = document.querySelector('.form__input-text_type_role');

function openPopup() {
  newName.value = username.textContent;
  newRole.value = userRole.textContent;
  popup.classList.add('popup_showed');
}

function closePopup() {
  popup.classList.remove('popup_showed');
}

function updateProfile(evt) {
  evt.preventDefault();
  username.textContent = newName.value;
  userRole.textContent = newRole.value;
  closePopup()
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit', updateProfile);
