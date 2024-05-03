import { getData, sendData } from "./api.js";

const testButton = document.querySelector(".test-button");
const poSendForm = document.querySelector('.po-send-form');

testButton.addEventListener("click", () => {
  console.log("attempting to fetch data");
  getData(
    (data) => {
      console.log(data)
    },
    (error) => {
      console.log(`${error} - Не удается подгрузить данные. попробуйте еще`);
    }
  );
});

poSendForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  sendData(() => {
    console.log('success! Check the DB now')
  }, () => {
    throw new Error('Unable to send data')
  }, formData)
})
