document.getElementById("bg1").addEventListener("click", function(){
    document.getElementById("main").style.display='block';
    document.getElementById("heading").innerHTML='Head Gear';
    document.getElementById("img1").src=('h1.png');
    document.getElementById("img2").src=('h2.png');
    document.getElementById("img3").src=('h3.png');
});

document.getElementById("bg2").addEventListener("click", function(){
    document.getElementById("main").style.display='block';
    document.getElementById("heading").innerHTML='Body Gear';
    document.getElementById("img1").src=('b1.png');
    document.getElementById("img2").src=('b2.png');
    document.getElementById("img3").src=('b3.png');

});

document.getElementById("bg3").addEventListener("click", function(){
    document.getElementById("main").style.display='block';
    document.getElementById("heading").innerHTML='Leg Gear';
    document.getElementById("img1").src=('l1.png');
    document.getElementById("img2").src=('l2.png');
    document.getElementById("img3").src=('l3.png');

});

document.getElementById("bg4").addEventListener("click", function(){
    document.getElementById("main").style.display='block';
    document.getElementById("heading").innerHTML='Foot Gear';
    document.getElementById("img1").src=('f1.png');
    document.getElementById("img2").src=('f2.png');
    document.getElementById("img3").src=('f3.png');

});