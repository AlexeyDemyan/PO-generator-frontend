export const createOrderLineDTO = () => {
  const orderLineDTO = [];

  const bodyElement = document.querySelector("body");
  const orderLinesElementsList = bodyElement.querySelectorAll(".order-line");

  orderLinesElementsList.forEach((orderLine) => {
    const orderLineObj = {
      product: orderLine.querySelector(".order-line--product").value,
      supplierRef: orderLine.querySelector(".order-line--supplier-ref").value,
      quantity: orderLine.querySelector(".order-line--quantity").value,
      unitPrice: orderLine.querySelector(".order-line--unit-price").value,
      totalPrice: orderLine.querySelector(".order-line--total-price").value,
    };
    orderLineDTO.push(orderLineObj);
  });
  return orderLineDTO;
};
