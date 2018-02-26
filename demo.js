var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");

hcount = 1;
bcount = 1;
lcount = 1;
fcount = 1;

document.getElementById('nextBut').addEventListener("click", function(ev){
    console.log(c1.checked, c2.checked, c3.checked, c4.checked);
    if(c1.checked){
        hcount++;
        if (hcount < 4) {
            if (hcount == 1) {
                document.getElementById('hgear').src='h1.png';
            }
            else if (hcount == 2) {
                document.getElementById('hgear').src='h2.png';
            }
            else if (hcount == 3) {
                document.getElementById('hgear').src='h3.png';
            }
        }
        else {
            hcount = 1;
            document.getElementById('hgear').src='h1.png';
        }
    }
    else if(c2.checked){
        bcount++;
        if (bcount < 4) {
            if (bcount == 1) {
                document.getElementById('bgear').src='b1.png';
            }
            else if (bcount == 2) {
                document.getElementById('bgear').src='b2.png';
            }
            else if (bcount == 3) {
                document.getElementById('bgear').src='b3.png';
            }
        }
        else {
            bcount = 1;
            document.getElementById('bgear').src='b1.png';
        }
    }
    else if(c3.checked){
        lcount++;
        if (lcount < 4) {
            if (lcount == 1) {
                document.getElementById('lgear').src='l1.png';
            }
            else if (lcount == 2) {
                document.getElementById('lgear').src='l2.png';
            }
            else if (lcount == 3) {
                document.getElementById('lgear').src='l3.png';
            }
        }
        else {
            lcount = 1;
            document.getElementById('lgear').src='l1.png';
        }
    }
    else if(c4.checked){
        fcount++;
        if (fcount < 4) {
            if (fcount == 1) {
                document.getElementById('fgear').src='f1.png';
            }
            else if (fcount == 2) {
                document.getElementById('fgear').src='f2.png';
            }
            else if (fcount == 3) {
                document.getElementById('fgear').src='f3.png';
            }
        }
        else {
            fcount = 1;
            document.getElementById('fgear').src='f1.png';
        }
    }
    else {
        alert('You must select your gear!')
    }
});

document.getElementById('prevBut').addEventListener("click", function(ev){
    console.log(c1.checked, c2.checked, c3.checked, c4.checked);
    if(c1.checked){
        hcount--;
        if (hcount > 0) {
            if (hcount == 1) {
                document.getElementById('hgear').src='h1.png';
            }
            else if (hcount == 2) {
                document.getElementById('hgear').src='h2.png';
            }
            else if (hcount == 3) {
                document.getElementById('hgear').src='h3.png';
            }
        }
        else {
            hcount = 3;
            document.getElementById('hgear').src='h3.png';
        }
    }
    else if(c2.checked){
        bcount--;
        if (bcount > 0) {
            if (bcount == 1) {
                document.getElementById('bgear').src='b1.png';
            }
            else if (bcount == 2) {
                document.getElementById('bgear').src='b2.png';
            }
            else if (bcount == 3) {
                document.getElementById('bgear').src='b3.png';
            }
        }
        else {
            bcount = 3;
            document.getElementById('bgear').src='b3.png';
        }
    }
    else if(c3.checked){
        lcount--;
        if (lcount > 0) {
            if (lcount == 1) {
                document.getElementById('lgear').src='l1.png';
            }
            else if (lcount == 2) {
                document.getElementById('lgear').src='l2.png';
            }
            else if (lcount == 3) {
                document.getElementById('lgear').src='l3.png';
            }
        }
        else {
            lcount = 3;
            document.getElementById('lgear').src='l3.png';
        }
    }
    else if(c4.checked){
        fcount--;
        if (fcount > 0) {
            if (fcount == 1) {
                document.getElementById('fgear').src='f1.png';
            }
            else if (fcount == 2) {
                document.getElementById('fgear').src='f2.png';
            }
            else if (fcount == 3) {
                document.getElementById('fgear').src='f3.png';
            }
        }
        else {
            fcount = 3;
            document.getElementById('fgear').src='f3.png';
        }
    }
    else {
        alert('You must select your gear!')
    }
});

document.getElementById('gearText').addEventListener('keyup', function(ev){
    if(ev.keyCode == 13){
        if(gearText.value == 'combo1'){
            hcount = 1;
            bcount = 1;
            lcount = 1;
            fcount = 1;
            document.getElementById('hgear').src='h1.png';
            document.getElementById('bgear').src='b1.png';
            document.getElementById('lgear').src='l1.png';
            document.getElementById('fgear').src='f1.png';
        }
        else if(gearText.value == 'combo2'){
            hcount = 2;
            bcount = 2;
            lcount = 2;
            fcount = 2;
            document.getElementById('hgear').src='h2.png';
            document.getElementById('bgear').src='b2.png';
            document.getElementById('lgear').src='l2.png';
            document.getElementById('fgear').src='f2.png';
        }
        else if(gearText.value == 'combo3'){
            hcount = 3;
            bcount = 3;
            lcount = 3;
            fcount = 3;
            document.getElementById('hgear').src='h3.png';
            document.getElementById('bgear').src='b3.png';
            document.getElementById('lgear').src='l3.png';
            document.getElementById('fgear').src='f3.png';
        }
    }
});