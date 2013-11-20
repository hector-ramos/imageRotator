// var loginName = prompt("Who are you?");


// if (loginName === "hector") {
//     alert("Welcome to your first plugin!");
// } else {
//     var answer = prompt("Are you a friend of Hector?");
//     if (answer === "yes") {
//         alert("Ok you can enter my sample plugin");
//     } else {
//         alert("Ooopppssss!!!!! Impakto ka!");
//     }
// }

// var images = [
//     'images/front-view-large.jpg',
//     'images/left-view-large.jpg',
//     'images/rear-view-large.jpg',
//     'images/right-view-large.jpg'
// ];

// var elementStr = '';

// var tmpImg = new Image();

// for (var i = 0; i < images.length; i++) {
//     tmpImg.src = images[i];

//     elementStr += tmpImg.outerHTML;
// }

// document.getElementById("image-placeholder").innerHTML = elementStr;

var items = new Array();
    items[0]="<img src='images/front-view-large.jpg' height='300' width='300' border='0' />";
    items[1]="<img src='images/left-view-large.jpg' height='300' width='300' border='0' />"; 
    items[2]="<img src='images/rear-view-large.jpg' height='300' width='300' border='0' />"; 
    items[3]="<img src='images/right-view-large.jpg' height='300' width='300' border='0' />";
// var items = [
//     'images/front-view-large.jpg',
//     'images/left-view-large.jpg',
//     'images/rear-view-large.jpg',
//     'images/right-view-large.jpg'
// ];

// var howOften = 5;
var current = 0;
var image = document.getElementById;

function rotathor() {
    if(image)document.getElementById("place-holder").innerHTML = items[current]
    current = (current === items.length-1) ? 0 : current + 1;
    // setTimeout("rotathor()",howOften*1000);
}

window.onclick = rotathor;