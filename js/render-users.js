const bodyElement = document.querySelector("body");
const formElement = bodyElement.querySelector(".form");
const usersListElement = formElement.querySelector(".users-list");

export const renderUsers = (users) => {
  users.forEach((user) => {
    const optionElement = document.createElement("option");
    optionElement.value = user.name;
    optionElement.text = user.name;
    usersListElement.appendChild(optionElement);
  });
};
