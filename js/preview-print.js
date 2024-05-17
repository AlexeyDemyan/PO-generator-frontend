export const previewPrint = (entry) => {
  fetch("http://localhost:3333/print")
    .then((response) => {
      if (response.ok) {
        window.open("http://localhost:3333/print", "_blank");
        return response;
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};
