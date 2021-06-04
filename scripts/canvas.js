let ctx = document.getElementById('canvas').getContext('2d');
let img = new Image();
img.src = '../puissance4/images/backdrop.png';
img.onload = function(){
    ctx.drawImage(img, 0, 0);
}