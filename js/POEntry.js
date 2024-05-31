import { renderModal } from "./modal.js";

const bodyElement = document.querySelector("body");
const poEntriesListElement = bodyElement.querySelector(".po-entries-list");

export const renderPoEntry = (poEntry) => {
  const poEntryListItem = document.createElement("li");

  poEntryListItem.innerHTML = `
  <div class="po-entries-list--number">${new Date(poEntry.createdAt).getFullYear()}-${poEntry.orderNumber}</div>
  <div class="po-entries-list--date">${poEntry.date ? new Date(poEntry.date).toLocaleDateString() : ""}</div>
  <div class="po-entries-list--user">${poEntry.user}</div>
  <div class="po-entries-list--company">${poEntry.company}</div>
  <div class="po-entries-list--supplier">${poEntry.supplier}</div>`;

  poEntryListItem.addEventListener("click", () => {
    renderModal(poEntry);
  });

  poEntriesListElement.appendChild(poEntryListItem);
};
