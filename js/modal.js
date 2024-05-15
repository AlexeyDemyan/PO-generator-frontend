export const renderModal = (bodyElement) => {
  const modalElement = bodyElement.querySelector(".modal");
  const closeButton = modalElement.querySelector(".close");

  closeButton.addEventListener("click", () => {
    modalElement.style.display = "none";
  });
};
