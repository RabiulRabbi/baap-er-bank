function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmountValue = parseFloat(inputAmountText);
    inputField.value = "";
    return inputAmountValue;
}
function getTotalField(totalFieldId,amount){
    const totalCurrentAmount = document.getElementById(totalFieldId);
    const totalCurrentAmountText = totalCurrentAmount.innerText;
    const totalAmountValue = parseFloat(totalCurrentAmountText);
    const totalAmount = totalAmountValue + amount;
    totalCurrentAmount.innerText = totalAmount;
    return totalAmount;
}
function getCurrentBalance(balanceId){
    const currentBalance = document.getElementById(balanceId);
    const balanceAmountText = currentBalance.innerText;
    const balanceAmountValue = parseFloat(balanceAmountText);
    return balanceAmountValue;
}
function updateBalance(balanceId,amount,isAdd){
    const currentBalance = document.getElementById(balanceId);
    // const balanceAmountText = currentBalance.innerText;
    // const balanceAmountValue = parseFloat(balanceAmountText);
    const balanceAmountValue = getCurrentBalance(balanceId);
    if(isAdd == true){
        currentBalance.innerText = balanceAmountValue + amount;
    }else{
        currentBalance.innerText = balanceAmountValue - amount;
    }
}

// Deposit amount using deposit button
document.getElementById('deposit-submit').addEventListener('click', function(){
    
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        getTotalField('deposit-amount',depositAmount);
        updateBalance('balance-amount',depositAmount,true);
    }
})

// withdraw amount using withdraw button
document.getElementById('withdraw-submit').addEventListener('click', function(){

    const withdrawAmountValue = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance('balance-amount');
    if(withdrawAmountValue > 0 && withdrawAmountValue <= currentBalance){
        getTotalField('withdraw-amount', withdrawAmountValue)
        updateBalance('balance-amount',withdrawAmountValue,false)
        }
})
