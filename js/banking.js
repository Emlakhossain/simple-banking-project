function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;

}

// add deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');

    //  add with previous value
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmt = parseFloat(previousDepositText);
    depositTotal.innerText = previousDepositAmt + depositAmount;

    //  total blance total...........
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
    // const updateBlanceTotal = previousBlanceTotal + newDepositTotal;

    blanceTotal.innerText = previousBlanceTotal + depositAmount;

});
// handle withdrow event handler
document.getElementById('withdrow-button').addEventListener('click', function () {
    // witgdraw input field
    // const withdrowInputField = document.getElementById('withdrow-input-field');
    // const withdrowAmtText = withdrowInputField.value;
    // // console.log(withdrowInputField)
    // const withdrowAmt = parseFloat(withdrowAmtText);
    // console.log(withdrowAmt)
    const withdrowAmt = getInputValue('withdrow-input-field');
    // withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmt = parseFloat(withdrawTotalText);
    // const newWithdrawTotal = withdrawTotalAmt + withdrowAmt;
    withdrawTotal.innerText = withdrawTotalAmt + withdrowAmt;

    // clear withdrow field
    // withdrowInputField.value = '';

    // blance update
    const blanceTotal = document.getElementById('blance-total');
    const previousBlanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalText);
    // const newBlanceTotal = previousBlanceTotal - withdrowAmt;

    blanceTotal.innerText = previousBlanceTotal - withdrowAmt;


});