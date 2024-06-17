const bodyElement = document.querySelector("body");
const apiModalElement = bodyElement.querySelector(".api-modal");
const apiModalElementHeader = apiModalElement.querySelector("h1");
const apiModalElementMessage = apiModalElement.querySelector("p");

const showSuccessMessage = () => {
  apiModalElementHeader.innerText = "PO Created successfully!";
  apiModalElementMessage.innerText =
    "You can open and view it from the list below";
  apiModalElement.style.display = "block";
};

const showErrorMessage = (errorMessage) => {
  apiModalElementHeader.innerText =
    "Unable to connect to server, please contact IT";
  apiModalElementMessage.innerText = errorMessage;
  apiModalElement.style.display = "block";
};

export { showSuccessMessage, showErrorMessage };
