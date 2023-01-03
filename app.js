const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");

confirmBtn.addEventListener("click", () => {
  // console.log('confirmed')
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  // validation logic
  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    return;
  }
  console.log("Reason: " + enteredReason);
  console.log("Amount: " + enteredAmount);
});

cancelBtn.addEventListener("click", () => {
  // console.log('cancelled')
});
