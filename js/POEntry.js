import { renderModal } from "./modal.js";

const bodyElement = document.querySelector("body");
const poEntriesListElement = bodyElement.querySelector(
  ".po-entries-list"
);

// const modalElement = bodyElement.querySelector(".modal");
// const closeButton = modalElement.querySelector(".close");

// closeButton.addEventListener('click', () => {
//   modalElement.style.display = 'none'
// })

export const renderPoEntry = (poEntry) => {
  const poEntryListItem = document.createElement('li');

  const poEntryNumberTextItem = document.createElement('p');
  poEntryNumberTextItem.innerText = poEntry.orderNumber;

  const poEntryUserTextItem = document.createElement('p');
  poEntryUserTextItem.innerText = poEntry.user;

  const poEntryCompanyTextItem = document.createElement('p');
  poEntryCompanyTextItem.innerText = poEntry.company;

  const poEntrySupplierTextItem = document.createElement('p');
  poEntrySupplierTextItem.innerText = poEntry.supplier;

  poEntryListItem.appendChild(poEntryNumberTextItem);
  poEntryListItem.appendChild(poEntryUserTextItem);
  poEntryListItem.appendChild(poEntryCompanyTextItem);
  poEntryListItem.appendChild(poEntrySupplierTextItem);

  poEntryListItem.addEventListener('click', () => {
    renderModal(poEntry)
  });

  poEntriesListElement.appendChild(poEntryListItem);
};
