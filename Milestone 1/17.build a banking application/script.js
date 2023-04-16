let deposit = (user, amount) => {
  user.balance += amount;
};

let withdraw = (user, amount) => {
  if (user.balance >= amount) {
    user.balance -= amount;
  } else {
    console.log("Insufficient balance");
  }
};

let user = { name: "Bino", balance: 9 };
deposit(user, 2);
console.log(user);
// Output -> { name: "Bino", balance: 11 }

withdraw(user, 6);
console.log(user);
// Output -> { name: "Bino", balance: 5 }
