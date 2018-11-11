function futureValue() {
    //variables//
    var balance = parseFloat(document.getElementById('balance').value);
    var annualRate = parseFloat(document.getElementById('annualRate').value);
    var numMonths = parseInt(document.getElementById('months').value);
    var monthlyRate = annualRate / 12;
    var interact = document.getElementById('interaction-item'); //used inside FOR loop//
    var outputResult = document.getElementById('output');
    var result = "";

    //This variables call a function to validte data entered///
    var validatingBalance = validatingValues(balance, 100, 10000);
    var validatingAnnualRates = validatingValues(annualRate, 2, 20);
    var validatingMonths = validatingValues(numMonths, 6, 24);

    //validating user data values entered//
    if (validatingBalance === false) {
        result = "Please, enter balance value between 100 and 10,000 including";
    } else if (validatingAnnualRates === false) {

        result = "Please, enter annual rates value between 2 and 20 including";
    } else if (validatingMonths === false) {
        result = "Please, enter months value between 6 and 24 including";
    } else {
        balance = Math.round(calculate(balance, monthlyRate, numMonths, interact)); //call calculate function//
        result = "Your balance after " + numMonths + " months will be $ " +
                balance + ",00";
        document.getElementById('future-value').style.display = 'none';
    }

    //send final calculated value to HTML page//
    outputResult.innerHTML = result;
}

function validatingValues(item, minvalue, maxvalue) {
    if (item < minvalue || item > maxvalue || isNaN(item)) {
        return false;
    } else {
        return true;
    }
}

function calculate(balance, monthlyRate, numMonths, interact) {
    // The FOR conditional loop
    for (var month = 1; month <= numMonths; month++) {
        var interest = balance * monthlyRate;
        interest = Math.round(interest * 100) / 100;
        balance += interest;
        //send each loop interaction to html page//
        interact.innerHTML += "Month " + month + ".   Future Value is $ " + Math.round(
            balance
        ) + ",00<br>";
    }
    return balance; //return final value//
}

function resetLoops(interact) {
    interact.innerHTML = "";
}

// ARRAY topic start here

var options = ['Google','Friend','Advert','Others'];//A simple array with string datas
var select = document.getElementById('hear-about'); 
for( country in options ) {//FON-IN to interact array
    
    select.add( new Option( options[country] ) );
}

//Note:this other way to populate array into HTML dropdown list
/* 
 for (var i = 0; i < options.length; i++) {
    console.log(opt);
    var el = document.createElement("option");
    el.text = opt;
    el.value = opt;
    select.appendChild(el);
} ; */

//Here start Associtive Array topic
var myCar = { make:"Ford", model:"Mustang", year:1969 };

var greatCar = myCar.model;
document.getElementById('arrayResult').innerHTML = greatCar;