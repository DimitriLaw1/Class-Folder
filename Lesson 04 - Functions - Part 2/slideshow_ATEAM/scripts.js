/*
Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
	4. logs the current photo name.
	4. Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.
*/

/*
var slideshow = {
    photoList:[ "photo1", "photo2", "photo3"],
    currentPhotoIndex: 0,

    function nextPhoto(){
for(this.currentPhotoIndex=0;currentPhotoIndex<photoList.length; currentPhotoIndex++)

    }
    console.log(this.photoList[this.currentPhotoIndex])
}; */
/*
var time = 0;
var grativity = 0.5;

class particle{
    prototype(time , gravity){
        this.time = '';
    this.gravity = '';
    
    }
}
*/ /*
function Particle(startX, startY){
    this.x= startX;
    this.y = startY;
    this.velocity = {x:0, y:0};
    }

    const particles = [];
    for(let i=0; i<100; i++){
        particles.push(new Particle(i, Math.random()*500));
    }
    console.log(particles); */

    var profile = {
    
    name:" Dimitri" ,
    address:" 11111 township road " ,
    city:" charlotte " ,
    state:" north carolina " ,
    zipcode:" 55555 " ,
    avatar:" avatar.jpg " 
    };

    function getProfileUpdate(){
Object.assign("tom adams", "5555 township", "matthews", "south carolina", "22222", "love.jpg");
    }

    console.log(getProfileUpdate());