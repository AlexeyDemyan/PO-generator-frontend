const bodyElement = document.querySelector("body");
const modalElement = bodyElement.querySelector(".modal");
const modalOrderNumberElement = modalElement.querySelector('.modal-order-number');
const modalUserElement = modalElement.querySelector(".modal-user");
const modalCompanyElement = modalElement.querySelector(".modal-company");
const modalDateElement = modalElement.querySelector('.modal-date');
const modalSupplierElement = modalElement.querySelector(".modal-supplier");
const modalSupplierAddressElement = modalElement.querySelector('.modal-supplier-address');
const modalSupplierCodeElement = modalElement.querySelector('.modal-supplier-code');
const modalDeliveryDateElement = modalElement.querySelector('.modal-delivery-date');
const modalOrderElement = modalElement.querySelector('.modal-order');
const modalOrderLinesElement = modalElement.querySelector('.modal-order-lines');
const modalPaymentTermsElement = modalElement.querySelector('.modal-payment-terms');
const modalOtherRemarksElement = modalElement.querySelector('.modal-other-remarks');
const modalDiscountElement = modalElement.querySelector('.modal-discount');
const modalNetTotalValueElement = modalElement.querySelector('.modal-net-total-value');
const modalPriceIncludesVatElement = modalElement.querySelector('.modal-price-includes-vat');

export const renderModal = (poEntry) => {
  modalOrderNumberElement.innerText = `Order Number: ${poEntry.orderNumber}`;
  modalUserElement.innerText = poEntry.user;
  modalCompanyElement.innerText = poEntry.company;
  modalDateElement.innerText = poEntry.date;
  modalSupplierElement.innerText = poEntry.supplier;
  modalSupplierAddressElement.innerText = poEntry.supplierAddress;
  modalSupplierCodeElement.innerText = poEntry.supplierCode;
  modalDeliveryDateElement.innerText = poEntry.deliveryDate;
  modalOrderElement.innerText = poEntry.order;
  modalOrderLinesElement.innerText = poEntry.orderLines;
  modalPaymentTermsElement.innerText = poEntry.paymentTerms;
  modalOtherRemarksElement.innerText = poEntry.otherRemarks;
  modalDiscountElement.innerText = poEntry.discount;
  modalNetTotalValueElement.innerText = poEntry.netTotalValue;
  modalPriceIncludesVatElement.innerText = poEntry.priceIncludesVat;
  modalElement.style.display = 'block';
};

export const printModal = () => {

}
