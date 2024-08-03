const cardTemplate = document.querySelector("#card-template").content;
const places = document.querySelector(".places__list");

const deleteCard = (evt) => {
  evt.target.closest(".card").remove();
};

const createCard = (card, deleteCard) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  cardElement.querySelector(".card__image").src = card.link;
  cardElement.querySelector(".card__image").alt = `Изображение ${card.name}`;
  cardElement.querySelector(".card__title").textContent = card.name;

  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCard);

  return cardElement;
};

const renderCards = (cards) => {
  cards.forEach((card) => {
    places.append(createCard(card, deleteCard));
  });
};

renderCards(initialCards);
