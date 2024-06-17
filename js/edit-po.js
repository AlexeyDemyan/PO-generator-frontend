const bodyElement = document.querySelector("body");
const poNumberForEditElement = bodyElement.querySelector(".po-number-for-edit");

const renderEdit = (orderNumber) => {
  console.log(orderNumber);
  poNumberForEditElement.style.display = "block";
};

const cancelEdit = () => {
  poNumberForEditElement.style.display = 'none';
}

export { renderEdit, cancelEdit };
