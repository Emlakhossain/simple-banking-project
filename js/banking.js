

// add deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    // Add new amount
    const depositField = document.getElementById('deposit-input');
    const depositAmtText = depositField.value;
    const newDepositAmt = parseFloat(depositAmtText);
    // console.log(depositAmt);

    //  add with previous value
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmt = parseFloat(previousDepositText);
    depositTotal.innerText = previousDepositAmt + newDepositAmt;
    depositField.value = '';
    //  total blance total...........
    const blanceTotal = document.getElementById('blance-total');
    const blanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(blanceTotalText);
    // const updateBlanceTotal = previousBlanceTotal + newDepositTotal;

    blanceTotal.innerText = previousBlanceTotal + newDepositAmt;

});
// handle withdrow event handler
document.getElementById('withdrow-button').addEventListener('click', function () {
    // witgdraw input field
    const withdrowInputField = document.getElementById('withdrow-input-field');
    const withdrowAmtText = withdrowInputField.value;
    // console.log(withdrowInputField)
    const withdrowAmt = parseFloat(withdrowAmtText);
    // console.log(withdrowAmt)

    // withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmt = parseFloat(withdrawTotalText);
    // const newWithdrawTotal = withdrawTotalAmt + withdrowAmt;
    withdrawTotal.innerText = withdrawTotalAmt + withdrowAmt;

    // clear withdrow field
    withdrowInputField.value = '';

    // blance update
    const blanceTotal = document.getElementById('blance-total');
    const previousBlanceTotalText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalText);
    // const newBlanceTotal = previousBlanceTotal - withdrowAmt;

    blanceTotal.innerText = previousBlanceTotal - withdrowAmt;


});