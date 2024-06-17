import { getData, sendData, getUsers } from "./api.js";
import { renderPoEntry } from "./POEntry.js";
import { renderOrderLine } from "./order-line.js";
import { createOrderLineDTO } from "./order-line-dto.js";
import { renderUsers } from "./render-users.js";
import { previewPrint } from "./preview-print.js";
import { calculateTotalValue } from "./total-value.js";
import { showSuccessMessage } from "./api-success.js";

const bodyElement = document.querySelector("body");
const poSendForm = bodyElement.querySelector(".po-send-form");
const poEntriesListElement = bodyElement.querySelector(".po-entries-list");
const formDiscountElement = poSendForm.querySelector(".discount-input");

const addNewLineButton = bodyElement.querySelector(".add-new-line-button");

const modalElement = bodyElement.querySelector(".modal");
const modalOrderNumberElement = modalElement.querySelector(
  ".modal-order-number"
);
const closeButton = modalElement.querySelector(".close");
const modalPrintButton = modalElement.querySelector(".modal-print");

const apiModalElement = bodyElement.querySelector(".api-modal");
const apiModalCloseButton = apiModalElement.querySelector(".close");
const apiModalOkButton = apiModalElement.querySelector(".modal-ok");

let orderLinesRenderedAmount = 0;
const maxOrderLinesRenderedAmount = 10;
renderOrderLine(orderLinesRenderedAmount, maxOrderLinesRenderedAmount);
orderLinesRenderedAmount++;

addNewLineButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  renderOrderLine(orderLinesRenderedAmount, maxOrderLinesRenderedAmount);
  orderLinesRenderedAmount++;
});

closeButton.addEventListener("click", () => {
  modalElement.style.display = "none";
});

apiModalCloseButton.addEventListener("click", () => {
  apiModalElement.style.display = "none";
});

apiModalOkButton.addEventListener("click", () => {
  apiModalElement.style.display = "none";
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    modalElement.style.display = "none";
    apiModalElement.style.display = "none";
  }
});

modalPrintButton.addEventListener("click", () => {
  const oderNumberFromDataset = modalOrderNumberElement.dataset.orderNumber;
  previewPrint(oderNumberFromDataset);
});

poSendForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  let newObj = {};
  formData.forEach((value, key) => (newObj[key] = value));
  newObj.orderLines = createOrderLineDTO();
  let newObjToJson = JSON.stringify(newObj);

  console.log(newObjToJson);

  sendData(
    () => {
      showSuccessMessage();

      poEntriesListElement.innerHTML = "";

      getData(
        (data) => {
          data.forEach((entry) => {
            renderPoEntry(entry);
          });
        },
        (error) => {
          console.log(`${error} - Unable to load data`);
        }
      );
    },
    () => {
      throw new Error("Unable to send data");
    },
    newObjToJson
  );
});

console.log("attempting to fetch data...");

getData(
  (data) => {
    data.forEach((entry) => {
      renderPoEntry(entry);
    });
    console.log("Data obtained successfully!");
  },
  (error) => {
    console.log(`${error} - Unable to load data`);
  }
);

getUsers(
  (data) => {
    renderUsers(data);
  },
  (error) => {
    console.log(`${error} - Unable to load users`);
  }
);

formDiscountElement.addEventListener("input", calculateTotalValue);
