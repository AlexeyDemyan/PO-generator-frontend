const bodyElement = document.querySelector("body");
const modalElement = bodyElement.querySelector(".modal");
const modalOrderNumberElement = modalElement.querySelector(
  ".modal-order-number"
);
const modalUserElement = modalElement.querySelector(".modal-user");
const modalCompanyElement = modalElement.querySelector(".modal-company");
const modalDateElement = modalElement.querySelector(".modal-date");
const modalSupplierElement = modalElement.querySelector(".modal-supplier");
const modalSupplierAddressElement = modalElement.querySelector(
  ".modal-supplier-address"
);
const modalSupplierCodeElement = modalElement.querySelector(
  ".modal-supplier-code"
);
const modalDeliveryDateElement = modalElement.querySelector(
  ".modal-delivery-date"
);
const modalOrderLinesElement = modalElement.querySelector(".modal-order-lines");
const modalOrderLinesListElement = modalOrderLinesElement.querySelector(
  ".modal-order-lines-list"
);
const modalPaymentTermsElement = modalElement.querySelector(
  ".modal-payment-terms"
);
const modalOtherRemarksElement = modalElement.querySelector(
  ".modal-other-remarks"
);
const modalDiscountElement = modalElement.querySelector(".modal-discount");
const modalNetTotalValueElement = modalElement.querySelector(
  ".modal-net-total-value"
);
const modalPriceIncludesVatElement = modalElement.querySelector(
  ".modal-price-includes-vat"
);

const orderLineHeader = [
  "Product",
  "Supplier Ref",
  "Quantity",
  "Unit Price",
  "Total Price",
];

const renderOneOrderLine = (orderLine) => {
  const orderLineElement = document.createElement("li");
  orderLineElement.classList.add("modal-order-lines-list--element");
  for (const prop in orderLine) {
    const propElement = document.createElement("div");
    propElement.innerText = orderLine[prop];
    propElement.classList.add(`modal-order-lines-list--element-${prop}`);
    orderLineElement.appendChild(propElement);
  }
  return orderLineElement;
};

export const renderModal = (poEntry) => {
  modalOrderNumberElement.innerText = `${new Date(
    poEntry.createdAt
  ).getFullYear()}-${poEntry.orderNumber}`;
  modalOrderNumberElement.dataset.orderNumber = poEntry.orderNumber;
  modalUserElement.innerText = poEntry.user;
  modalCompanyElement.innerText = poEntry.company;
  modalDateElement.innerText = `${
    poEntry.date ? new Date(poEntry.date).toLocaleDateString() : ""
  }`;
  modalSupplierElement.innerText = poEntry.supplier;
  modalSupplierAddressElement.innerText = poEntry.supplierAddress;
  modalSupplierCodeElement.innerText = poEntry.supplierCode;
  modalDeliveryDateElement.innerText = `${
    poEntry.date ? new Date(poEntry.deliveryDate).toLocaleDateString() : ""
  }`;
  modalOrderLinesListElement.innerHTML = "";
  const headerLine = renderOneOrderLine(orderLineHeader);
  modalOrderLinesListElement.appendChild(headerLine);
  console.log(poEntry.orderLines)
  poEntry.orderLines.forEach((line) => {
    const orderLineElement = renderOneOrderLine(line);
    modalOrderLinesListElement.appendChild(orderLineElement);
  });
  modalPaymentTermsElement.innerText = poEntry.paymentTerms;
  modalOtherRemarksElement.innerText = poEntry.otherRemarks;
  modalDiscountElement.innerText = poEntry.discount;
  modalNetTotalValueElement.innerText = poEntry.netTotalValue;
  modalPriceIncludesVatElement.innerText = poEntry.priceIncludesVat;
  modalElement.style.display = "block";
};
