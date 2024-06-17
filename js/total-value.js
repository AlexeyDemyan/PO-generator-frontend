const bodyElement = document.querySelector("body");
const poSendForm = bodyElement.querySelector(".po-send-form");
const formDiscountElement = poSendForm.querySelector('.discount-input');


const netTotalValueInputElement = poSendForm.querySelector('.netTotalValue-input');

export const calculateTotalValue = () => {
  const totalPriceElements = poSendForm.querySelectorAll('.order-line--total-price');
  let totalSum = 0;
  totalPriceElements.forEach((elt) => {totalSum += Number(elt.value)});
  let totalDiscount = totalSum * Number(formDiscountElement.value) / 100;
  netTotalValueInputElement.value = (totalSum - totalDiscount).toFixed(2);
}
