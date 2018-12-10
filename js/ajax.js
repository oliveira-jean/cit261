var ul = document.getElementById('users');
var radios = document.getElementsByName("num_users");
var numUsers = 5;//The number of users to display in first page load

function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}
function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

//Create the request Object
var request = new XMLHttpRequest();
var url = "https://randomuser.me/api/?results=" + String(numUsers);
//Call the open function, GET-type of request, url, true-asynchronous
request.open('GET', url, true);
//call send
request.send();
//Common Types of HTTP Status
// 200: OK
// 404: ERROR
// 403: FORBIDDEN

//Event listener ensures to display results only when XHR is completelly load
request.addEventListener("load", display);

// AJAX call again when user click on radio button
document.getElementById('form').onclick = function () {
  for (var i = 0; i < radios.length; i++) {//get new number of users to display
    if (radios[i].checked) {
      numUsers = radios[i].value;
      console.log(numUsers);
    }
    url = "https://randomuser.me/api/?results=" + String(numUsers);
    request.open('GET', url, true);
    request.send();
  }
};

//display results according the number of users
function display() {
  ul.innerHTML = '';//clear all users
  //Other way to remove all user
  // while (ul.hasChildNodes()) {
  //   ul.removeChild(ul.lastChild);
  // }
  var newuser;
  var users = JSON.parse(request.responseText);
  if (request.readyState == 4 && request.status == "200") {
    for (var i = 0; i < users.results.length; i++) {//create new html elements
      newuser = users.results[i];
      var li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
      img.src = users.results[i].picture.medium;
      span.innerHTML = capital_letter(newuser.name.first) + ' ' + capital_letter(newuser.name.last) +
        '<br>' + newuser.cell + '<br>' + capital_letter(newuser.location.city);
      append(li, img);
      append(li, span);
      append(ul, li);
    }
  } else {
    alert('An error occurred fetching the JSON from ' + url);
  }
};

function capital_letter(str) {
  str = str.split(" ");
  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
}

