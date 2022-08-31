const voucherValue = document.querySelector("#voucher");
const errorVoucher = document.querySelector(".errorVoucher");
let validVoucher = "12345678";
const submitBtn = document.querySelector(".submit-btn");
console.log(voucherValue.value);
submitBtn.addEventListener("click", function () {
  if (voucherValue.value != validVoucher) {
    errorVoucher.innerText =
      "Voucher is not valid, please enter a valid voucher";
  } else {
    location.href = "/order.html";
  }
});
