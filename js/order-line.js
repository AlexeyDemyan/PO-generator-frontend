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
  <input class="order-line--unit-price" type="text">
  <input class="order-line--total-price" type="text">`;

    orderLinesList.appendChild(orderLineItem);
  }
  else {console.log('cannot create more order lines')}
};
