
//Javascript Objects
var myObject = {
    color: "Red",
    count: 5,
    msgOut1: function () {
        var messageOut1 = "Quantity: " + this.count + ", Color: " + this.color;
        document.getElementById('outputObj1').innerHTML = messageOut1;
     }
    };
    
    function message1(){
        var messageOut=myObject.msgOut1();
        myObject.msgOut1();
    }

    //Construtors
    function Item(color, count){
        this.color = color;
        this.count = count;
        this.msgOut2 = function () {
            var messageOut2 = "Quantity: " + this.count + ", Color: " + this.color;
            document.getElementById('outputObj2').innerHTML = messageOut2;
         }
         }
         var greenObject = new Item("Green", 7);
         function message2(){
           
            greenObject.msgOut2();
           
        }
       
//Prototype, Inheritance
Item.prototype.isAvailable = true; //add new property isAvailable
var blueObject = new Item("Blue", 3);


function message3(){
    if (blueObject.isAvailable){
        var messageOut3 = "The blue object is available.";
     }
    
     if (greenObject.isAvailable){//Check if greenObject have isAvailable property by Inheritance.
          var messageOut4 = "And now, the greenObject object have isAvailable property too, by Inheritance.";
     }
    document.getElementById('outputObj3').innerHTML = messageOut3;
    document.getElementById('outputObj4').innerHTML = messageOut4;
}

