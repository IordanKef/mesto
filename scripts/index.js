//profile variables
const editButton = document.querySelector('.profile__edit-button');
const username = document.querySelector('.profile__username');
const userRole = document.querySelector('.profile__user-role');
const profilePopup = document.querySelector('.popup_type_profile');
const closeProfileButton = profilePopup.querySelector('.popup__close-button');
const profileForm = profilePopup.querySelector('.form');
const newName = profilePopup.querySelector('.form__input-text_type_first');
const newRole = profilePopup.querySelector('.form__input-text_type_second');

//card's variables
const addButton = document.querySelector('.profile__add-button');
const addPlacePopup = document.querySelector('.popup_type_add-place');
const closeAddPlaceButton = addPlacePopup.querySelector('.popup__close-button');
const placeForm = addPlacePopup.querySelector('form');
const newPlaceTitle = addPlacePopup.querySelector('.form__input-text_type_first');
const newPlaceImageUrl = addPlacePopup.querySelector('.form__input-text_type_second');
const placesList = document.querySelector('.places__list');

const placePopup = document.querySelector('.popup_type_place');
const closePlaceButton = placePopup.querySelector('.popup__close-button');
const placePopupImage = placePopup.querySelector('.place__image');
const placePopupTitle = placePopup.querySelector('.place__title')

//default places to load
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

function openPopup(popup) {
  popup.classList.add('popup_showed');
}

function openProfilePop() {
  newName.value = username.textContent;
  newRole.value = userRole.textContent;
  openPopup(profilePopup);
}

function closeProfilePop() {
  profilePopup.classList.remove('popup_showed');
}

function openAddPlacePop() {
  newPlaceTitle.value = "";
  newPlaceImageUrl.value = "";
  openPopup(addPlacePopup);
}

function closeAddPlacePop() {
  addPlacePopup.classList.remove('popup_showed');
}

function closePlacePop () {
  placePopup.classList.remove('popup_showed');
}

function updateProfile(evt) {
  evt.preventDefault();
  username.textContent = newName.value;
  userRole.textContent = newRole.value;
  closeProfilePop()
}

//create card from teamplate
const createCard = function (title, url) {
  const cardTemplate = document.querySelector('#card').content;
  const newCard = cardTemplate.querySelector('.card').cloneNode(true);
  newCard.querySelector('.card__title').textContent = title;
  newCard.querySelector('.card__image').src = url;

  //like feature
  const likeButton = newCard.querySelector('.card__like');
  likeButton.addEventListener('click', function (event) {
    let eventTarget = event.target;
    eventTarget.classList.toggle('card__like_liked')
  });

  //delete feature
  const deleteButton = newCard.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', function (event) {
    let eventTarget = event.target;
    const thatCard = eventTarget.closest('.card');
    thatCard.remove();
  })

  //open large photo with title feature
  const image = newCard.querySelector('.card__image');
  image.addEventListener('click', function (event) {
    let eventTarget = event.target;
    placePopup.classList.add('popup_showed');
    placePopupImage.src = eventTarget.src;
    let cardTitle = eventTarget.nextElementSibling.firstElementChild;
    placePopupTitle.textContent = cardTitle.textContent;
  })

  placesList.append(newCard);
}

function addCard(evt) {
  evt.preventDefault();
  createCard(newPlaceTitle.value, newPlaceImageUrl.value);
  closeAddPlacePop();
}

//set default cards
initialCards.forEach( function (item) {
  createCard(item.name, item.link);
})

editButton.addEventListener('click', openProfilePop);
addButton.addEventListener('click', openAddPlacePop);
closeProfileButton.addEventListener('click', closeProfilePop);
closeAddPlaceButton.addEventListener('click', closeAddPlacePop);
profileForm.addEventListener('submit', updateProfile);
placeForm.addEventListener('submit', addCard);
closePlaceButton.addEventListener('click', closePlacePop);
