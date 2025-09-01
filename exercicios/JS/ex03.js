
var quant, cont, num
quant = parseInt(prompt("Digite a quantidade de números pares que deseja ver:"))
num = 0;

for (cont = 0; cont < quant; cont++) {
    num = cont * 2;
    alert(num);
}
