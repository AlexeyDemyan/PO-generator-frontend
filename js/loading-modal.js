const bodyElement = document.querySelector("body");
const loadingModalElement = bodyElement.querySelector(".loading-modal");

const showLoadingModal = () => {
  loadingModalElement.style.display = "block";
};

const hideLoadingModal = () => {
  loadingModalElement.style.display = 'none';
}

export { showLoadingModal, hideLoadingModal };
