import { calculateTotalValue } from "./total-value.js";

const bodyElement = document.querySelector("body");
const formElement = bodyElement.querySelector(".po-send-form");
const orderLinesList = formElement.querySelector(".order_lines");

export const renderOrderLine = (
  orderLinesRenderedAmount,
  maxOrderLinesRenderedAmount
) => {
  if (orderLinesRenderedAmount <= maxOrderLinesRenderedAmount) {
    const orderLineItem = document.createElement("li");
    orderLineItem.classList.add('order-line');
    orderLineItem.classList.add(`order-line-${orderLinesRenderedAmount + 1}`);
    orderLineItem.innerHTML = `
  <input class="order-line--product" type="text">
  <input class="order-line--supplier-ref" type="text">
  <input class="order-line--quantity" type="text">
  <input class="order-line--unit-price" type="number" step=".01">
  <input class="order-line--total-price" type="number" step=".01">`;

    orderLinesList.appendChild(orderLineItem);
    orderLineItem.querySelector('.order-line--total-price').addEventListener('input', calculateTotalValue)
  }
  else {console.log('cannot create more order lines')}
};
