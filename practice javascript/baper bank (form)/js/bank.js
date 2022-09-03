// Deposit amount using deposit button
document.getElementById('deposit-submit').addEventListener('click', function(){
    const depositAmount = document.getElementById('deposit-input');
    const depositAmountValue = depositAmount.value;
    // console.log(depositAmountValue);
    const depositCurrentAmount = document.getElementById('deposit-amount').innerText;
    const depositTotalAmount = parseFloat(depositCurrentAmount) + parseFloat(depositAmountValue);
    document.getElementById('deposit-amount').innerText = depositTotalAmount;
    document.getElementById('deposit-input').value = "";

    const currentBalance = document.getElementById('balance-amount');
    const balanceAmountValue = currentBalance.innerText;
    const balanceTotalAmount = parseFloat(balanceAmountValue) + parseFloat(depositAmountValue);
    document.getElementById('balance-amount').innerText = balanceTotalAmount;
    
})

// withdraw amount using withdraw button
document.getElementById('withdraw-submit').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-input');
    const withdrawAmountValue = withdrawAmount.value;
    // console.log(withdrawAmountValue);
    const withdrawCurrentAmount = document.getElementById('withdraw-amount').innerText;
    const withdrawTotalAmount = parseFloat(withdrawCurrentAmount) + parseFloat(withdrawAmountValue);
    document.getElementById('withdraw-amount').innerHTML = withdrawTotalAmount;
    document.getElementById('withdraw-input').value = "";

    const currentBalance = document.getElementById('balance-amount');
    const balanceAmountValue = currentBalance.innerText;
    const balanceTotalAmount = parseFloat(balanceAmountValue) - parseFloat(withdrawAmountValue);
    document.getElementById('balance-amount').innerText = balanceTotalAmount;
})
