import { calculateTotalValue } from "./total-value.js";

const bodyElement = document.querySelector("body");
const formElement = bodyElement.querySelector(".po-send-form");
const orderLinesList = formElement.querySelector(".order_lines");

const calculateTotalPrice = (
  quantityElement,
  priceElement,
  totalPriceElement
) => {
  totalPriceElement.value = (
    Number(quantityElement.value) * Number(priceElement.value)
  ).toFixed(2);
};

export const renderOrderLine = (
  orderLinesRenderedAmount,
  maxOrderLinesRenderedAmount
) => {
  if (orderLinesRenderedAmount <= maxOrderLinesRenderedAmount) {
    const orderLineItem = document.createElement("li");
    orderLineItem.classList.add("order-line");
    orderLineItem.classList.add(`order-line-${orderLinesRenderedAmount + 1}`);
    orderLineItem.innerHTML = `
  <input class="order-line--product" type="text">
  <input class="order-line--supplier-ref" type="text">
  <input class="order-line--quantity" type="number" step=".01">
  <input class="order-line--unit-price" type="number" step=".01">
  <input class="order-line--total-price" type="number" step=".01" readonly>`;

    orderLinesList.appendChild(orderLineItem);
    orderLineItem
      .querySelector(".order-line--quantity")
      .addEventListener("input", () => {
        calculateTotalPrice(
          orderLineItem.querySelector(".order-line--quantity"),
          orderLineItem.querySelector(".order-line--unit-price"),
          orderLineItem.querySelector(".order-line--total-price")
        );
        calculateTotalValue();
      });
    orderLineItem
      .querySelector(".order-line--unit-price")
      .addEventListener("input", () => {
        calculateTotalPrice(
          orderLineItem.querySelector(".order-line--quantity"),
          orderLineItem.querySelector(".order-line--unit-price"),
          orderLineItem.querySelector(".order-line--total-price")
        );
        calculateTotalValue();
      });
  } else {
    console.log("cannot create more order lines");
  }
};
