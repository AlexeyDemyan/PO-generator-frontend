export const previewPrint = (orderNumber) => {
  fetch(`http://localhost:3333/po_entries/print${orderNumber}`)
    .then((response) => {
      if (response.ok) {
        window.open(`http://localhost:3333/po_entries/print${orderNumber}`, "_blank");
        return response;
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};
