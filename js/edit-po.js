const bodyElement = document.querySelector("body");
const poNumberForEditElement = bodyElement.querySelector(".po-number-for-edit");
const poNumberElement = poNumberForEditElement.querySelector(
  ".po-number-for-edit--number"
);

let editingPO = false;

const formatDate = (date) => {
  let rawDate = new Date(date);
  const year = rawDate.getFullYear();
  const month = String(rawDate.getMonth() + 1).padStart(2, "0");
  const day = String(rawDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const extractLineInfo = (lineHTML) => {
  let lineitems = [];
  let currentLineItem = '';
  console.log(lineHTML);
  for (let i = 0; i < lineHTML.length; i++) {

  }
}

const populateOrderLines = (orderLines) => {
  for (let i = 1; i < orderLines.length; i++) {
    extractLineInfo(orderLines[i].innerHTML)
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

const renderEdit = (orderNumber, modalElement) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  editingPO = true;
  console.log(orderNumber);
  console.log(modalElement);
  populateModalValuesIntoForm(modalElement);
  poNumberForEditElement.style.display = "block";
};

const cancelEdit = () => {
  editingPO = false;
  poNumberForEditElement.style.display = "none";
};

export { renderEdit, cancelEdit };
