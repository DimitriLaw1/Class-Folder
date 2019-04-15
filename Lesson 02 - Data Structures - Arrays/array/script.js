//Start with the following code template. After each step, run the program and see how the output changes.


/*
function createFunction(){
    var a = "Hans Zmmer Rules!";
    inception = function(){
        console.log(a);
    }
}

var inception;
createFunction();
inception();
*/



/*
function outer(){
    var b = "John";
    var a = "amy";

    console.log(a , b);

    function inner(a , b) {
        b = "marry";
        a= "sarah"
     console.log(a , b);
    }
  
    inner(a , b);
  }
  
  outer(); */
  
     // 1.Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
      
     // 2.Log the values of a and b in the inner function.
      
      // 3.Update the inner function to take two parameters named a and b.
      
      // 4.Pass a and b in as arguments when you execute inner().
      
      // 5.Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
      
      // 6.Inside the inner function, update a property of the b object.




/*var landscape = function (){
    var result = '';

    var flat = function(size){
        for(var count = 0; count < size; count++)
        result += " _ ";
    };

    var mountain = function(size){
        result += '/';
        for(var count = 0; count < size; count++)
        result += '';
        result += "//";
    };

    

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
}

console.log(landscape());

*/
