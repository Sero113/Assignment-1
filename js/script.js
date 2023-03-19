//I dont know how to create the confirm alert while the home page is open//

let result = confirm('Would you like to book a table');

console.log(result);


// Dont know why but my onmouseover isnt working with select by ID //

document.style.color= 'black';

onmouseover = document.getElementById('btnwhite').style.color= 'red';


// Drinking Age limit//

var drinkAge = 19; 

dinkAge -= 1;

/* I tried to have the hero Image change backgrounds but i dont know how to change 
the image when the image url is in css instead of my images folder*/

let content = document.GetElementbyId('content');
let contents = ['dining-1.jpeg', 'sushi.jpg', 'texture.avif']
let random = Math.floor(Math.random() * 4);
image.src = image[random];
setInterval(function(){},800);
