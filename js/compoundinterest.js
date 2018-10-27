function  futureValue(){
    var balance= parseFloat(document.getElementById('balance').value);
    var annualRate=parseFloat(document.getElementById('annualRate').value);
    var numMonths=parseInt(document.getElementById('months').value);
    var monthlyRate = annualRate/12;

    for (var month=1; month <= numMonths; month++){
        var interest=balance*monthlyRate;
        interest=Math.round(interest*100)/100;
        balance+=interest;
    }
document.getElementById('output').innerHTML=
         "Your balance after " + numMonths + " months will be $" + balance;
}
