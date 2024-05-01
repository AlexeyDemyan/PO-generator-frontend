import { getData, sendData } from "./api.js";

const mainButton = document.querySelector(".main-button");
const testButton = document.querySelector(".test-button");

mainButton.addEventListener("click", () => {
  console.log("button clicked!");
});

testButton.addEventListener("click", () => {
  console.log("attempting to fetch data");
  getData(
    (data) => {
      console.log(data)
    },
    (error) => {
      showAlert(`${error} - Не удается подгрузить данные. попробуйте еще`);
    }
  );
});
