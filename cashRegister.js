function checkCashRegister(price, cash, cid) {
  const currencyUnitValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let changeAmount = cash - price;
  let totalCID = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }
  totalCID = parseFloat(totalCID.toFixed(2));

  if (totalCID < changeAmount) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCID === changeAmount) {
    return { status: "CLOSED", change: cid };
  } else {
    let change = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      const denomination = cid[i][0];
      const availableAmount = cid[i][1];
      const unitValue = currencyUnitValues[denomination];
      const maxAmountToUse = Math.min(
        availableAmount,
        Math.floor(changeAmount / unitValue) * unitValue
      );
      if (maxAmountToUse > 0) {
        change.push([denomination, maxAmountToUse]);
        changeAmount -= maxAmountToUse;
        changeAmount = parseFloat(changeAmount.toFixed(2));
      }
    }

    if (changeAmount > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: change };
  }
}
