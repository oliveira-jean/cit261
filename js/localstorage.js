function usernameSet() {
    var username = (document.getElementById('username').value); //get html input form value
    localStorage.setItem("name", username); //set keyname and value
    usernameGet();
}

function usernameGet() {
    name = localStorage.getItem("name"); // get keyname and value
    keyname = localStorage.key(0);
    console.log(keyname);
    console.log(name);
    document.getElementById('usernameKey').innerHTML = keyname;
    document.getElementById('usernameValue').innerHTML = name;
}

function usernameNull() {
    localStorage.name = null; // delete the value
    usernameGet();
}

function usernameClear() {
    localStorage.clear(); // no more key/value pairs
    usernameGet();
}

function addContact() {
    var firstName = (document.getElementById('firstname').value);
    var lastName = (document.getElementById('lastname').value);
    var age = (document.getElementById('age').value);
    var person = new Person();
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    console.log(person);
    localStorage.person = JSON.stringify(person, null, '\t');
    console.log(localStorage);
    var savedPerson = JSON.parse(localStorage.person);
    console.log(savedPerson);
    var results = document.getElementById('result');
    results.innerHTML += JSON.stringify(savedPerson, null, '\t') + "<br>"
}

function delContact() {
    var localLenght = localStorage.length;
    localStorage.removeItem.person(localLenght);
    var results = document.getElementById('result');
    var savedPerson = JSON.parse(localStorage.person);
}

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

function arraynameSet() {
    var arrayName = ["Paul", "Jean", "Chris", "Luise"];
    console.log(arrayName);
    for (var i = 0; i < arrayName.length; i++) { //walking in the array
        eachname = arrayName[i];
        localStorage.setItem();
        var name = localStorage.getItem(i);
        document.getElementById('arrayNames').innerHTML += name + "<br>";
    }
}