const bodyElement = document.querySelector("body");
const formElement = bodyElement.querySelector(".po-send-form");
const orderLinesList = formElement.querySelector(".order_lines");

export const renderOrderLine = () => {
  const orderLineItem = document.createElement("li");
  orderLineItem.innerHTML = `
  <input class="order-line--product" type="text">
  <input class="order-line--supplier-ref" type="text">
  <input class="order-line--quantity" type="text">
  <input class="order-line--unit-price" type="text">
  <input class="order-line--total-price" type="text">`;

  orderLinesList.appendChild(orderLineItem);
};
