var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://jsonplaceholder.typicode.com/', true)

request.onload = function () {
  // Begin accessing JSON data here
  }


// Send request
request.send();

var x =  document.getElementById("userinput1").value;

if(x == " "){
    document.getElementById("#userinput").innerHTML = "Try Again"
}