pinNumber = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (ev) {
    ev.preventDefault();

    const addToAmount = parseInt(document.getElementById("add-money").value);

    const bankAccountNum = document.getElementById("bank-account-num").value;
    const bankAcTo = parseInt(bankAccountNum);
    if (bankAccountNum.length < 11) {
      alert("ki dios sob");
      return;
    }
    const accountPin = parseInt(document.getElementById("account-pin").value);

    if (accountPin !== pinNumber) {
      alert("pin daw");
      return;
    }

    const currentAmountnow = parseInt(
      document.getElementById("currentAmount").innerText //jehutu eita ekta html tag tail inner text dite hbe
    );

    const sum = currentAmountnow + addToAmount;

    document.getElementById("currentAmount").innerText = sum;
  });

document.getElementById("cash-out-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const AgentNumber = document.getElementById("Agent-Number").value;

  const AgentNumberP = parseInt(AgentNumber);

  if (AgentNumber.length < 11) {
    alert("give me currect number");
    return;
  }

  const accountPin = parseInt(document.getElementById("account-pin-num").value);

  if (accountPin !== pinNumber) {
    alert("Wrong PIN");
    return;
  }

  const amountValue = document.getElementById("amount").value;
  const currentAmount = document.getElementById("currentAmount").innerText;
  const minus = currentAmount - amountValue;
  document.getElementById("currentAmount").innerText = minus;
});
