const bodyElement = document.querySelector("body");
const poEntriesSectionElement = bodyElement.querySelector(
  ".information__inner"
);

export const poEntry = (poEntry) => {
  const poEntryFragment = document.createDocumentFragment();
  Object.values(poEntry).forEach((value) => {
    let currentDiv = document.createElement("div");
    currentDiv.innerHTML = value;
    poEntryFragment.appendChild(currentDiv);
  });

  poEntriesSectionElement.appendChild(poEntryFragment);
};
