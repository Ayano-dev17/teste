
var intervalo = 6000;

function slide1(){

    document.getElementById("banner").src="../img/sala01.jpeg";
    setTimeout("slide2()",intervalo);

}

function slide2(){

    document.getElementById("banner").src="../img/sala02.jpeg";
    setTimeout("slide3()",intervalo);

}

function slide3(){

    document.getElementById("banner").src="../img/sala03.jpeg";
    setTimeout("slide1()",intervalo);
}


function slide4(){

    document.getElementById("banner").src="../img/sala04.jpeg";
    setTimeout("slide1()",intervalo);
}


function slide5(){

    document.getElementById("banner").src="../img/sala05.jpeg";
    setTimeout("slide1()",intervalo);
}




