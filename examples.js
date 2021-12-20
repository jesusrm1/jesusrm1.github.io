window.onload = function() { 
document.getElementById('send1').onclick = verify;  
document.getElementById('send2').onclick = compare; 
document.getElementById('send3').onclick = showVowels;  
document.getElementById('send4').onclick = countVowels; 
}


function verify() {
	let sentence = document.getElementById('palindrome').value;
	sentence = sentence.toLowerCase();
	let res1 = document.getElementById('res1').innerHTML = '';
	res1 = document.getElementById('res1');

	let character = '';
	let sentence_space = "";
	let back_sentence = "";
	 
	for (i = 0; i < sentence.length; i++) {
	  character = sentence.charAt(i);
	  if (character != " ") {
		  sentence_space += character;
		  back_sentence = character + back_sentence;
	  }
	}
	if(sentence === ''){
		res1.innerHTML = "<br/>Ingrese una frase";
	}
	else if (sentence_space == back_sentence) {	
	    res1.innerHTML = "<br/>El texto es un palindromo";
	}
	else {
		res1.innerHTML = "<br/>El texto no es un palindromo";
	}
}


function compare() {

	let res2 = document.getElementById('res2').innerHTML = '';
	let num1 = 0;
	num1 = Number(document.getElementById('num1').value);
	let num2 = 0;
	num2 = Number(document.getElementById('num2').value);
	
	if (num1 > num2) {
		res2 = document.getElementById('res2');
		res2.innerHTML = `<br/>El número mayor es: ${num1}`;
	} 
	else if( num1 === num2 ) {
		res2 = document.getElementById('res2');
		res2.innerHTML = "<br/>Los números son iguales";
	} 
	else {
		res2 = document.getElementById('res2');
		res2.innerHTML = `<br/>El número mayor es: ${num2}`;
	}
}


function showVowels() {
	let sentence = document.getElementById('vowels').value;
	sentence = sentence.toLowerCase();
	let res3 = document.getElementById('res3').innerHTML = '';
	res3 = document.getElementById('res3');
	
	let character = '';
	let vowels = "";
	 
	for (i = 0; i < sentence.length; i++) {
	  character = sentence.charAt(i);
	  if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
		  vowels += character + ' ';
	  }
	}
	if(sentence === ''){
		res3.innerHTML = "<br/>Ingrese una frase"
	}
	else if (vowels.length === 0) {
		res3.innerHTML = "<br/>No hay ninguna vocal"
	}
	else {
		res3.innerHTML = `<br/>${vowels}`;
	}
}



	
function countVowels() {
	let sentence = document.getElementById('counting_vowels').value;
	sentence = sentence.toLowerCase();
	let res4 = document.getElementById('res4').innerHTML = '';
	res4 = document.getElementById('res4');
	
	let character = '';
	let a = 0;
	let e = 0;
	let i = 0;
	let o = 0;
	let u = 0;
	 
	for (x = 0; x < sentence.length; x++) {
	  character = sentence.charAt(x);
	  	if (character === "a") {
		  a += 1;
	  	}else if (character === "e") {
			e += 1;
		}else if (character === "i") {
			i += 1;
		}else if (character === "o") {
			o += 1;
		}else if (character === "u") {
			u += 1;
		}
	}
	if(sentence === ''){
		res4.innerHTML = "<br/>Ingrese una frase"
	}
	else if ((a + e + i + o + u) === 0) {
		res4.innerHTML = "<br/>No hay ninguna vocal"
	}
	
	else {
		res4.innerHTML = `<br/>
		Número de 'a': ${a} <br/>
		Número de 'e': ${e} <br/>
		Número de 'i': ${i} <br/>
		Número de 'o': ${o} <br/>
		Número de 'u': ${u} <br/> `;
	}
}