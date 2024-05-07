import { getData, sendData } from "./api.js";
import { renderPoEntry } from "./POEntry.js";

const poSendForm = document.querySelector(".po-send-form");
// const outputArea = document.querySelector(".po-entries-list--container");

poSendForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  let newObj = {};
  formData.forEach((value, key) => (newObj[key] = value));
  let newObjToJson = JSON.stringify(newObj);

  console.log(newObjToJson);

  sendData(
    () => {
      console.log("success! Check the DB now");
    },
    () => {
      throw new Error("Unable to send data");
    },
    newObjToJson
  );
});

console.log("attempting to fetch data");
getData(
  (data) => {
    console.log(data);
    data.forEach((entry) => {
      console.log(entry.user)
      renderPoEntry(entry);
    });
  },
  (error) => {
    console.log(`${error} - Не удается подгрузить данные. попробуйте еще`);
  }
);
