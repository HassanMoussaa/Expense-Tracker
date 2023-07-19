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
   const expenseInput=$("#expenseName");
   const amountInput=$("#amount");
   const tableBody=$("tbody");


   if (expenseInput.val().trim() === ""   ||  amountInput.val().trim() === "") return;


    const expenseRow=$(expenseRowElement(expenseInput.val(),amountInput.val()))

    tableBody.prepend(expenseRow);


    //todo: remove
    expenseRow.find(".remove").click(function () {
    expenseRow.remove()



     let total=$(".totalAmount")
    let sum=0
    let bodyRows = $("td span.amount");
    bodyRows.each(function() {
     let amountText = $(this).text();
     let amountValue = parseFloat(amountText);
     sum+=amountValue
    })
     total.text(sum)
  })

    expenseInput.val("");
    amountInput.val("");

    
    let total=$(".totalAmount")
    let sum=0
    let bodyRows = $("td span.amount");
    bodyRows.each(function() {
     let amountText = $(this).text();
     let amountValue = parseFloat(amountText);
     sum+=amountValue
    })
     total.text(sum)

}
$(document).ready(function(){


  const addButton = $("#addExpense");
  // add item
  addButton.click(addExpenseItem)

})