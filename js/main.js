/* find the id and get the click for the 3 colors
create 3 functions for the 3 colors
inside the function get the body style the background
and get the body and style the text */

document.getElementById('chicago').onclick = chicagoBack;
document.getElementById('newYork').onclick = newyorkBack;
document.getElementById('LA').onclick = laBack;

function chicagoBack() {
  document.querySelector('body').style.backgroundImage = 'url(/img/chicago.jpg)';
  document.querySelector('body').style.backgroundSize = 'cover';
  document.querySelector('body').style.color = 'red';
}

function newyorkBack() {
  document.querySelector('body').style.backgroundImage = 'url(/img/newyork.jpg)';
  document.querySelector('body').style.backgroundSize = '600px';
  document.querySelector('body').style.color = 'red';
}

function laBack() {
  document.querySelector('body').style.backgroundImage = 'url(/img/LA.jpg)';
  document.querySelector('body').style.backgroundSize = '600px';
  document.querySelector('body').style.color = 'red';
}