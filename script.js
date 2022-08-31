const submitBtn = document.querySelector(".submit-btn");
const checkbox = document.querySelector("#terms");
const errorHandler = document.querySelector(".acceptance-error");
let voucher = document.querySelector("#voucher");
checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    submitBtn.classList.remove("disabled-custom");
    errorHandler.classList.add("hide");
  } else {
    submitBtn.classList.add("disabled-custom");
    errorHandler.classList.remove("hide");
  }
});

submitBtn.addEventListener("click", function () {
  if (!checkbox.checked) {
    errorHandler.innerText = "Please accept the terms and conditions above";
  } else location.href = "success.html";
});

// var myModal = document.getElementById("myModal");
// var myInput = document.getElementById("myInput");

// myModal.addEventListener("shown.bs.modal", function () {
//   myInput.focus();
// });

// function setVoucher() {
//   let voucherRan = Math.random().toString(36).slice(2);
//   document.querySelector("#voucher").value = voucherRan;
//   //console.log(voucherRan);
//   //console.log(voucher.value);
// }

// setVoucher();
