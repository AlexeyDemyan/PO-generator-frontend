const bodyElement = document.querySelector("body");
const apiModalElement = bodyElement.querySelector(".api-modal");

export const showSuccessMessage = () => {
  console.log("success!");
  apiModalElement.style.display = "block";
};
