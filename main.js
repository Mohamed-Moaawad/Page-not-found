var randomChang = document.getElementById('Page')

images = ['images/img-1.jpg', 'images/img-2.jpg','images/img-3.jpg',
'images/img-4.jpg','images/img-5.jpg','images/img-6.jpg','images/img-7.jpg',
'images/img-8.jpg','images/img-9.jpg','images/img-10.jpg','images/img-12.jpg',
'images/img 13.jpg',
'images/img-14.jpg','images/img-15.jpg','images/img-16.jpg','images/img-17.jpg',
'images/img-18.jpg','images/img-19.jpg','images/img-1.png']

var imgCount = images.length
var number = Math.floor(Math.random() * imgCount);

window.onload = function(){
    randomChang.style.backgroundImage = 'url('+images[number]+')';
}

///////////////////////////

var pos = document.documentElement;
pos.addEventListener('mousemove', e =>
{pos.style.setProperty('--x',e.clientX + 'px' )
pos.style.setProperty('--y',e.clientY + 'px' )})


//////////////////


var loader = document.getElementById("load");
window.addEventListener("load" , function(){
    loader.style.display = "none";
})