
function calcular(){
	let sal = document.getElementById("salario").value
	let pac = document.getElementById("pacto").value

	let dizimo = sal / 10
	let valorDizimo = document.getElementById("dizimo").innerHTML = "R$ " + dizimo.toFixed(2)
	
	let pacto = (sal/100)*pac
	let valorPacto = document.getElementById("p").innerHTML = "R$ " + pacto.toFixed(2)
}




















