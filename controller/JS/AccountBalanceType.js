const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  },
   {
    monthNumber: 3, // three months ago
    account: {
      balance: { amount: 300 },
    },
  }
];

const accountTypeChecker = (accountBalanceHistory) => {
  /***
  Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
  whether this array is of type A (variable) or type B (fixed).

  Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

  Type 🅱 is one where the balance amount changes by the same amount each month.
  ***/
  let result = undefined; //for cases where you have insufficient data
  
  let n = accountBalanceHistory.length; //no. of month's data
  
  if (n > 2){ // we need atleast 3 months statement to figure out type A or B
    result = 'B';
    //constantDifference will be same every month for type B
    let constantDifference = Math.abs(accountBalanceHistory[0].account.balance.amount - accountBalanceHistory[1].account.balance.amount);
  
    for (let i = 2; i < n; i++){
      let currentDifference = Math.abs(accountBalanceHistory[i].account.balance.amount - accountBalanceHistory[i-1].account.balance.amount);
      if (currentDifference !== constantDifference){ //since difference varies i.e type A
        result = 'A';
        break;
      }
    }
  }
  return result;
};

const testAccountBalanceType = () => {
    console.log(accountTypeChecker(accountBalanceHistory));
}

module.exports= {testAccountBalanceType};