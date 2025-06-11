const botaoConverter = document.getElementById("convert-btn");
const containerOutput = document.getElementById("output");
const input = document.getElementById("number");
const result = document.getElementById("result");

botaoConverter.addEventListener("click", () => {
    containerOutput.style.display = "block";
    if (input.value === "") {
        result.textContent = "Por favor, tente um número válido!";
    }
    else {
        const valor = parseInt(input.value, 10);
        if (valor < 1) {
            result.textContent = "O número deve ser maior ou igual à 1";
        }
        else if (valor >= 4000) {
            result.textContent = "O número deve ser menor ou igual à 3999";
        }
        else {
            result.textContent = converterParaRomano(valor);
        }
    }
});

function converterParaRomano (valor) {
 let soma = 0;
 let arrayRomanos = [];
 let diferença;
 while (soma !== valor){
    diferença = valor - soma;
    if (diferença >= 1000) {
      soma += 1000;
      arrayRomanos.push("M");
    } else if (diferença >= 900) {
      soma += 900;
      arrayRomanos.push("CM");
    } else if (diferença >= 500) {
      soma += 500;
      arrayRomanos.push("D");
    } else if (diferença >= 400) {
      soma += 400;
      arrayRomanos.push("CD");
    } else if (diferença >= 100) {
      soma += 100;
      arrayRomanos.push("C");
    } else if (diferença >= 90) {
      soma += 90;
      arrayRomanos.push("XC");
    } else if (diferença >= 50) {
      soma += 50;
      arrayRomanos.push("L");
    } else if (diferença >= 40) {
      soma += 40;
      arrayRomanos.push("XL");
    } else if (diferença >= 10) {
      soma += 10;
      arrayRomanos.push("X");
    } else if (diferença === 9) {
      soma += 9;
      arrayRomanos.push("IX");
    } else if (diferença >= 5) {
      soma += 5;
      arrayRomanos.push("V");
    } else if (diferença === 4) {
      soma += 4;
      arrayRomanos.push("IV");
    } else if (diferença >= 1) {
      soma += 1;
      arrayRomanos.push("I");
    } else {
      break;
    }
 }
 return arrayRomanos.join("");
}