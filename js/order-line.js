const bodyElement = document.querySelector("body");
const formElement = bodyElement.querySelector(".po-send-form");
const orderLinesList = formElement.querySelector(".order_lines");

export const renderOrderLine = () => {
  const orderLineItem = document.createElement("li");
  orderLineItem.innerHTML = `
  <input type="text">
  <input type="text">
  <input type="text">
  <input type="text">
  <input type="text">`

  orderLinesList.appendChild(orderLineItem);
};
