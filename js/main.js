import { getData, sendData, getUsers } from "./api.js";
import { renderPoEntry } from "./POEntry.js";
import { renderOrderLine } from "./order-line.js";
import { createOrderLineDTO } from "./order-line-dto.js";
import { renderUsers } from "./render-users.js";
// import { previewPrint } from "./preview-print.js";

const bodyElement = document.querySelector("body");
const poSendForm = bodyElement.querySelector(".po-send-form");
const poEntriesListElement = bodyElement.querySelector(".po-entries-list");

const addNewLineButton = bodyElement.querySelector(".add-new-line-button");

const modalElement = bodyElement.querySelector(".modal");
const closeButton = modalElement.querySelector(".close");
// const modalPrintButton = modalElement.querySelector(".modal-print");

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

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    modalElement.style.display = "none";
  }
});

// modalPrintButton.addEventListener("click", () => {
//   window.print();
// });

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
      console.log("Success! Refreshing the list now...");

      poEntriesListElement.innerHTML = "";

      getData(
        (data) => {
          // console.log(data[5]);
          data.forEach((entry) => {
            //console.log(entry.user);
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
    // console.log(data[5]);
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
)
