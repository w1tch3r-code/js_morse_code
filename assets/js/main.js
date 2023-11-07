"use strict";

// ===================================================
//   	   JS-Vertiefung – Project Morse Code
// ===================================================

console.log("%c JS-Vertiefung – Project Morse Code", "color: tomato");

// Aufgabenstellung:
// Es muss eine Funktion entwickelt werden, mit der man einfachen Text in Morsecode übersetzen kann. Das Array ist im Code-Snippet angegeben.

let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
];

const output = document.querySelector('#output');
const btnEncrypt = document.querySelector('#btnEncrypt');

btnEncrypt.addEventListener('click', () => {
	
	const morseArr = [];
	const textInput = document.querySelector('#encryptText').value.toUpperCase();
	const textInputArr = [...textInput]
	
	
	textInputArr.forEach((elem) => {

		for (let i = 0; i < morseAlphabet.length; i++) {
			if (elem === morseAlphabet[i].letter) {
				morseArr.push(morseAlphabet[i].morseCode);
				if (elem === ' ') {
					morseArr.push('/');
				}
			}
		}
	});
	
	// console.log(morseArr);
	output.style.display = 'block';
	output.textContent = morseArr.join(' ');
});