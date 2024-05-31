import { renderModal } from "./modal.js";

const bodyElement = document.querySelector("body");
const poEntriesListElement = bodyElement.querySelector(".po-entries-list");

export const renderPoEntry = (poEntry) => {
  const poEntryListItem = document.createElement("li");

  const renderDate = (date) => {
    if (date) {
      return new Date(date).toLocaleDateString();
    } else {
      return "";
    }
  };

  poEntryListItem.innerHTML = `
  <div class="po-entries-list--number">${poEntry.orderNumber}</div>
  <div class="po-entries-list--date">${renderDate(poEntry.date)}</div>
  <div class="po-entries-list--user">${poEntry.user}</div>
  <div class="po-entries-list--company">${poEntry.company}</div>
  <div class="po-entries-list--supplier">${poEntry.supplier}</div>`;

  poEntryListItem.addEventListener("click", () => {
    renderModal(poEntry);
  });

  poEntriesListElement.appendChild(poEntryListItem);
};
