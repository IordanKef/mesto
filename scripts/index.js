//переменные для работы с профилем
const editButton = document.querySelector('.profile__edit-button');
let username = document.querySelector('.profile__username');
let userRole = document.querySelector('.profile__user-role');
let profilePopup = document.querySelector('.popup_type_profile');
const closeProfileButton = profilePopup.querySelector('.popup__close-button');
let profileForm = profilePopup.querySelector('.form');
let newName = profilePopup.querySelector('.form__input-text_type_first');
let newRole = profilePopup.querySelector('.form__input-text_type_second');

//переменные для работы с карточками
const addButton = document.querySelector('.profile__add-button');
let placePopup = document.querySelector('.popup_type_place');
const closePlaceButton = placePopup.querySelector('.popup__close-button');
let placeForm = placePopup.querySelector('form');
let newPlaceTitle = placePopup.querySelector('.form__input-text_type_first');
let newPlaceImageUrl = placePopup.querySelector('.form__input-text_type_second');
let placesList = document.querySelector('.places__list');

//массив с дефолтными карточками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//универсальная ф. открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_showed');
}

//ф. открытия попапа редактирования профиля
function openProfilePopup() {
  newName.value = username.textContent;
  newRole.value = userRole.textContent;
  openPopup(profilePopup);
}

//ф. редактирования профиля
function updateProfile(evt) {
  evt.preventDefault();
  username.textContent = newName.value;
  userRole.textContent = newRole.value;
  closeProfilePop()
}

//ф. закрытия попапа редактирования профиля
function closeProfilePop() {
  profilePopup.classList.remove('popup_showed');
}

//ф. открытия попапа добавления новой карточки
function openPlacePopup() {
  newPlaceTitle.value = "";
  newPlaceImageUrl.value = "";
  openPopup(placePopup);
}

//ф. закрытия попапа добавления новой карточки
function closePlacePop() {
  placePopup.classList.remove('popup_showed');
}

//ф. создания карточки из темплейта
const createCard = function (title, url) {
  const cardTemplate = document.querySelector('#card').content;
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__title').textContent = title;
  newCard.querySelector('.card__image').src = url;

  const likeButton = newCard.querySelector('.card__like');
  likeButton.addEventListener('click', function (event) {
    eventTarget = event.target;
    eventTarget.classList.toggle('card__like_liked')
  });

  const deleteButton = newCard.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function (event) {
    eventTarget = event.target;
    const thatCard = eventTarget.closest('.card');
    thatCard.remove();
  })

  placesList.append(newCard);
}

//ф. добавления карточки через форму
function addCard(evt) {
  evt.preventDefault();
  createCard(newPlaceTitle.value, newPlaceImageUrl.value);
  closePlacePop();
}

//установка дефолтных карточек
initialCards.forEach( function (item) {
  createCard(item.name, item.link);
})

//обработчики кнопок и событий
editButton.addEventListener('click', openProfilePopup);
addButton.addEventListener('click', openPlacePopup);
closeProfileButton.addEventListener('click', closeProfilePop);
closePlaceButton.addEventListener('click', closePlacePop);
profileForm.addEventListener('submit', updateProfile);
placeForm.addEventListener('submit', addCard);


