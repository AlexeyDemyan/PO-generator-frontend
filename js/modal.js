const bodyElement = document.querySelector("body");
const modalElement = bodyElement.querySelector(".modal");
const modalUserTextElement = modalElement.querySelector(".modal-user");
const modalCompanyTextElement = modalElement.querySelector(".modal-company");
const modalSupplierTextElement = modalElement.querySelector(".modal-supplier");

export const renderModal = (poEntry) => {
  console.log(poEntry.company);
  modalUserTextElement.innerText = poEntry.user;
  modalCompanyTextElement.innerText = poEntry.company;
  modalSupplierTextElement.innerText = poEntry.supplier;
  modalElement.style.display = 'block';
};

export const printModal = () => {

}
