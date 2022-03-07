function exer6() {
// obter dados
let salario = Number (document.getElementById("salario").value)
let vendas = Number (document.getElementById("vendas").value)
let percentual = Number (document.getElementById("percentual").value)

// calcular comissão e total
let comissão = vendas * percentual/100
let total = salario + comissão
// saída de dados
documento.getElementById ("total").innerHTML = " O valor da comissão é " + comissão + " e o total é " + total
}