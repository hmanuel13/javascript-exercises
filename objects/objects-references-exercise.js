let myAccount = {
  name: 'Andrew Mead',
  expenses: 0,
  income: 900,
}

let addExpense = function (account, amount){
  account.expenses += amount
}

// addIncome
// resetAccount

// getAccountSummary
// Account for Andrew has $900. $1000 in income. $100 in expenses.

// resetAccount

let addIncome = function (account, amount){
  account.income += amount
}

let getAccountSummary = function (account){
  console.log(`\nName: ${account.name} \nExpense: \$${account.expenses} \nIncome: \$${account.income}`)
}

let resetAccount = function (account){
  account.expenses = 0
  account.income = 0
}

addIncome(myAccount, 1000)
addExpense(myAccount, 100)
getAccountSummary(myAccount)
// resetAccount(myAccount)
// getAccountSummary(myAccount)