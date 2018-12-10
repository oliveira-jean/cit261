  function stringifyFunc(){
    var name = document.getElementById('username').value;
    // console.log(name);
    var email = document.getElementById('useremail').value;
    var phone = document.getElementById('userphone').value;
    var city = document.getElementById('usercity').value;
    var state = document.getElementById('userstate').value;
     
    validating(name);
    validating(email);
    validating(phone);
    validating(city);
    validating(state);

     //create object
      var jsonObject = {username:name, useremail:email, userphone: phone,
      usercity:city,userstate:state}; //get form data into jsonObject object format
      var jsonString = JSON.stringify(jsonObject, null, '\t');//stringfy the object
      console.log(jsonString);//just to see in console
      document.getElementById('str-result').innerHTML = jsonString;//send to HTML page
      localStorage.setItem("storedFile", jsonString);//save string in file
    }
     
  function parseFunc() {
    var file = localStorage.getItem("storedFile");//get file saved 
    if(!file) {
      alert("Please complete the stringfy part before using this.")};
    var jsonParse = JSON.parse(file); //Parse file to JSON 
    console.log(jsonParse);// just to see in the console

    /*send to HTML page*/
    var outParse = "Name: " + jsonParse.username + "<br/>E-mail: " + jsonParse.useremail +
                    "<br/>Phone: " + jsonParse.userphone + "<br/>City: " + jsonParse.usercity + "<br/>State: " + jsonParse.userstate;
    document.getElementById('pars-result').innerHTML = outParse;//send to HTML page
    localStorage.removeItem("storedFile");
  }

  //validating form data
  function validating(formData){
  if ( formData == "") {
    alert("Please, enter all data.");
    formData(focus);
    return;
   }
  }