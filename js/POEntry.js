import { renderModal } from "./modal.js";

const bodyElement = document.querySelector("body");
const poEntriesListElement = bodyElement.querySelector(".po-entries-list");

export const renderPoEntry = (poEntry) => {
  const poEntryListItem = document.createElement("li");

  poEntryListItem.innerHTML = `
  <p>${poEntry.orderNumber}</p>
  <p>${poEntry.user}</p>
  <p>${poEntry.company}</p>
  <p>${poEntry.supplier}</p>`;

  poEntryListItem.addEventListener("click", () => {
    renderModal(poEntry);
  });

  poEntriesListElement.appendChild(poEntryListItem);
};
