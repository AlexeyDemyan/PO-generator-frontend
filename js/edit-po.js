import { renderOrderLine } from "./order-line.js";

const bodyElement = document.querySelector("body");
const formElement = bodyElement.querySelector(".po-send-form");
const orderLinesList = formElement.querySelector(".order_lines");
const poNumberForEditElement = bodyElement.querySelector(".po-number-for-edit");
const poNumberElement = poNumberForEditElement.querySelector(
  ".po-number-for-edit--number"
);

const formatDate = (date) => {
  let rawDate = new Date(date);
  const year = rawDate.getFullYear();
  const month = String(rawDate.getMonth() + 1).padStart(2, "0");
  const day = String(rawDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const populateOrderLines = (orderLines) => {
  let orderLinesRenderedAmount = 0;
  const maxOrderLinesRenderedAmount = 10;
  orderLinesList.innerHTML = "";

  for (let i = 1; i < orderLines.length; i++) {
    const lineInfo = {
      product: "",
      quantity: "",
      supplierRef: "",
      totalPrice: "",
      unitPrice: "",
    };

    Object.keys(lineInfo).forEach((key) => {
      lineInfo[key] = orderLines[i].querySelector(
        `.modal-order-lines-list--element-${key}`
      ).innerText;
    });
    console.log(lineInfo);
    renderOrderLine(orderLinesRenderedAmount, maxOrderLinesRenderedAmount);
    orderLinesRenderedAmount++;


    const lineElementToFill = orderLinesList.querySelector(
      `.order-line-${i}`
    );

    lineElementToFill.querySelector(".order-line--product").value =
      lineInfo.product;
    lineElementToFill.querySelector(".order-line--supplier-ref").value =
      lineInfo.supplierRef;
    lineElementToFill.querySelector(".order-line--quantity").value =
      lineInfo.quantity;
    lineElementToFill.querySelector(".order-line--unit-price").value =
      lineInfo.unitPrice;
    lineElementToFill.querySelector(".order-line--total-price").value =
      lineInfo.totalPrice;
  }
};

const populateModalValuesIntoForm = (modalElement) => {
  poNumberElement.innerText = modalElement.querySelector(
    ".modal-order-number"
  ).innerText;
  document.getElementById("user").value =
    modalElement.querySelector(".modal-user").innerText;
  document.getElementById("company").value =
    modalElement.querySelector(".modal-company").innerText;
  document.getElementById("date").value = formatDate(
    modalElement.querySelector(".modal-date").innerText
  );
  document.getElementById("supplier").value =
    modalElement.querySelector(".modal-supplier").innerText;
  document.getElementById("supplierAddress").value = modalElement.querySelector(
    ".modal-supplier-address"
  ).innerText;
  document.getElementById("supplierCode").value = modalElement.querySelector(
    ".modal-supplier-code"
  ).innerText;
  document.getElementById("deliveryDate").value = formatDate(
    modalElement.querySelector(".modal-delivery-date").innerText
  );

  // Code to populate lines
  populateOrderLines(
    modalElement.querySelector(".modal-order-lines-list").querySelectorAll("li")
  );
  //

  document.getElementById("paymentTerms").value = modalElement.querySelector(
    ".modal-payment-terms"
  ).innerText;
  document.getElementById("otherRemarks").value = modalElement.querySelector(
    ".modal-other-remarks"
  ).innerText;
  document.getElementById("discount").value =
    modalElement.querySelector(".modal-discount").innerText;
  document.getElementById("netTotalValue").value = modalElement.querySelector(
    ".modal-net-total-value"
  ).innerText;
  document.getElementById("priceIncludesVat").value =
    modalElement.querySelector(".modal-price-includes-vat").innerText;
};

const renderEdit = (orderNumber, modalElement, editingPOFlag) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  editingPOFlag = true;
  console.log(orderNumber);
  console.log(modalElement);
  populateModalValuesIntoForm(modalElement);
  poNumberForEditElement.style.display = "block";
};

const cancelEdit = (editingPOFlag) => {
  editingPOFlag = false;
  poNumberForEditElement.style.display = "none";
};

export { renderEdit, cancelEdit };
