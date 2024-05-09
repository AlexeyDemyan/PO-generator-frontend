const createModalTemplate = () => {
  return `<div class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Some text in the Modal..</p>
  </div>
</div>`;
};

const modalElement = bodyElement.querySelector(".modal");
const closeButton = modalElement.querySelector(".close");

closeButton.addEventListener("click", () => {
  console.log * "clicked";
});
