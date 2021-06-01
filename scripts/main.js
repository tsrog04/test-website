let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/website1.jpg') {
        myImage.setAttribute('src','images/website2.jpg');
    } else {
        myImage.setAttribute('src','images/website1.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my biography,' + myName;
    }
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textcontent = 'Welcome to my biography,' + storedName;
}
myButton.onclick = function() {
    setUserName();
}