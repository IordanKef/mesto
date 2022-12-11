let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__close-button');
let form = document.querySelector('.form');
let username = document.querySelector('.profile__username');
let userRole = document.querySelector('.profile__user-role');
let newName = document.querySelector('.form__input-text_type_name');
let newRole = document.querySelector('.form__input-text_type_role');
const likes = document.querySelectorAll('.places__like');

function open_popup() {
  newName.value = username.textContent;
  newRole.value = userRole.textContent;
  popup.classList.add('popup_showed');
}

function close_popup() {
  popup.classList.remove('popup_showed');
}

function update_profile(evt) {
  evt.preventDefault();
  username.textContent = newName.value;
  userRole.textContent = newRole.value;
  close_popup()
}

editButton.addEventListener('click', open_popup);
closeButton.addEventListener('click', close_popup);
form.addEventListener('submit', update_profile);


for (let like of likes) {
  like.addEventListener('click', function() {
    like.classList.toggle('places__like_liked');
  })
}
