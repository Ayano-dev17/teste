
var intervalo = 6000;

function slide1(){

    document.getElementById("banner").src="sala01.jpeg";
    setTimeout("slide2()",intervalo);

}

function slide2(){

    document.getElementById("banner").src="sala02.jpeg";
    setTimeout("slide3()",intervalo);

}

function slide3(){

    document.getElementById("banner").src="sala03.jpeg";
    setTimeout("slide1()",intervalo);
}


function slide4(){

    document.getElementById("banner").src="sala04.jpeg";
    setTimeout("slide1()",intervalo);
}


function slide5(){

    document.getElementById("banner").src="sala05.jpeg";
    setTimeout("slide1()",intervalo);
}




