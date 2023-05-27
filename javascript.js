
var intervalo = 6000;

function slide1(){

    document.getElementById("banner").src="sala01.jpg";
    setTimeout("slide2()",intervalo);

}

function slide2(){

    document.getElementById("banner").src="sala02.jpg";
    setTimeout("slide3()",intervalo);

}

function slide3(){

    document.getElementById("banner").src="sala03.jpg";
    setTimeout("slide1()",intervalo);
}



