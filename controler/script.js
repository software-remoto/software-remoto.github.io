
var contador1 = 1;
var contador2 = 1;
var contador3 = 1;
var contador4 = 1;
var contador5 = 1;

function votoExcelente(){
	
	document.getElementById("contador1").innerHTML = contador1 ++;

};


function votoBom(){
	/*document.getElementById("idVotoBom");*/
	document.getElementById("contador2").innerHTML = contador2 ++;	
};

function votoRegular(){
	
	document.getElementById("contador3").innerHTML = contador3 ++;	
};

function votoRuim(){
	
	document.getElementById("contador4").innerHTML = contador4 ++;	
};

function votoPessimo(){
    
	document.getElementById("contador5").innerHTML = contador5 ++;	
};

//funcoes que limpa o voto

function botao1(){
   document.getElementById('contador1').innerHTML = contador1 = 0;  	
};

function botao2(){
	document.getElementById('contador2').innerHTML = contador2 = 0;	
};

function botao3(){
	document.getElementById('contador3').innerHTML = contador3 = 0;	
};

function botao4(){
	document.getElementById('contador4').innerHTML = contador4 = 0;	
};

function botao5(){
	document.getElementById('contador5').innerHTML = contador5 = 0;	
};