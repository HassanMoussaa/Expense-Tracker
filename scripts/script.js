function expenseRowElement(expense,amount) {
  return `<tr>
    
    <td>
    <button class="remove">&#128465</button>
    <span class="expense">${expense}</span>
    </td>
    <td><span class="amount">${amount}</span></td>

  </tr>`
}


function addExpenseItem(){
const expanseInput=$("#expenseName");
const amountInput=$("#amount");
const tableBody=$("tbody");


if (expanseInput.val().trim() === ""   ||  amountInput.val().trim() === "") return;


const expenseRow=$(expenseRowElement(expanseInput.val(),amountInput.val()))

tableBody.prepend(expenseRow);


 //todo: remove
  expenseRow.find(".remove").click(function () {
    expenseRow.remove()
  })






expanseInput.val("");
amountInput.val("");
}


$(document).ready(function(){


  const addButton = $("#addExpense");
  // add item
  addButton.click(addExpenseItem)

let bodyRows= $("#tbody")

for (const row in tbody) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}



})