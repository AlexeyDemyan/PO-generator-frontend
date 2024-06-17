import { showErrorMessage } from "./api-messages.js";

export const previewPrint = (orderNumber) => {
  fetch(`http://localhost:3333/po_entries/print${orderNumber}`)
    .then((response) => {
      if (response.ok) {
        window.open(`http://localhost:3333/po_entries/print${orderNumber}`, "_blank");
        return response;
      }
      showErrorMessage(response.statusText);
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => console.log(data))
    .catch((err) => {
      showErrorMessage(err)
      console.log(err);
    });
};
