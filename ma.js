document.getElementById('deposit-button').addEventListener('click',function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    /* Update deposit Balance */
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount

    /* Get Current Deposit */
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    // const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount;
    // console.log(depositTotalText);

    
    /* clear Input Field */
    depositInput.value = '';
});

  /* Get withdraw */
  document.getElementById('withdraw-button').addEventListener('click',function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    // console.log(withdrawAmountText);
    const withdrawAmount = parseFloat(withdrawAmountText);
    withdrawInput.value = withdrawAmount;

  

    /* Get Current Withdraw */
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText)
    withdrawTotal.innerText = previousWithdrawAmount + withdrawAmount;
    /* update with Amount  */
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount

    /* clear Input Field */
    withdrawInput.value = '';
});
