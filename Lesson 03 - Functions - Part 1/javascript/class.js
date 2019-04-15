/*var counter = 0;

for(counter =0; counter<=100; counter++){

    


if(counter % 3){ // numbers divisible by 3 type what
    console.log(counter + " What");

} else if(counter % 5){ // numbers divisible by 5 type up

    console.log(counter + " Up");
}else  if(counter % 3 && 5){
    console.log(counter + " What Up");
    // numbers divisible by both results
}
} */

/*var superHeroes = ["batman", "bruce wayne"]["spiderman", "peter parker"]["the flash", "berry allen"];
var secretIdentity= superHeros.map();


function superHumans(revealArray) {
  return revealArray.join(" is ");
}
 console.log(ages.filter(checkAdult)); */
/*
 var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];


var runningBacks = players.filter(function(players){
    return players.position == 'RB' && players.touchdowns > 5;
    });

var checkFirstName = players.find(function(players){
    return players.firstName == 'Mike';
    });

var checkLastName = players.map(function(players){
return players.lastName;
});


   // console.log(players.filter(lastsName));

   console.log(runningBacks);
  
*/

var i= 0;
var playInterval = [];
var time = 1000;


playInterval[0]= "image.jpg";
playInterval[1]= "image.jpg";
playInterval[2]= "image.jpg";

function imageSlides(){

    playInterval[i];
  
  if(i<playInterval.length -1){
   i++;
  
  } else {
    i =0;
    
  }
  
  
  console.log(setTimeout("imageSlides()", time)); 

  }

/*

  
function play(plays){
   var plays = playInterval.forEach = setInterval(0 ,ms);

}

function pause(names){
   var names= clearInterval(playInterval);
} */

/*
var i= 0;
var images = [];
var time = 1000;


images[0]= "img/rock-p.png";
images[1]= "img/rock-s.png";
images[2]= "img/rock.png";


window.onload = imageSlides;

function imageSlides(){

  document.slideshow.src =images[i]; // gets "slideshow" from html and adds a source

if(i<images.length -1){
 i++;

} else {
  i =0;
  
}


setTimeout("imageSlides()", time); 


}

*/