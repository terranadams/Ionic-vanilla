const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector('#total-expenses')

let totalExpenses = 0

const clear = () => {
    reasonInput.value = ''
    amountInput.value = ''
}

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
    const alert = document.createElement('ion-alert');
    
    alert.header = 'Invalid Input';
    
    alert.message = 'Please enter valid reason and amount';
    alert.buttons = ['Oh.....ok'];
  
    document.body.appendChild(alert);
    return alert.present(); // this stops the rest of the script from running, while also presenting custom error message
  }
  //   console.log(enteredReason, enteredAmount);
  const newItem = document.createElement("ion-item");
  newItem.textContent = enteredReason + ": $" + enteredAmount;
  expensesList.appendChild(newItem)
  totalExpenses += +enteredAmount // with the extra plus sign here, it converts the string into a number
  totalExpensesOutput.textContent = totalExpenses
  clear()
});

cancelBtn.addEventListener("click", clear);
