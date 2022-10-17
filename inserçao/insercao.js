//aqui vem as funcoes em blocos pra editar o html
// muito importante
function doc(a,b){
    document.getElementById(a).innerText = b
}


function fraseNoticia(a,b) {
    doc("frseNoticia",a)
    doc("autor",b)
}

function proximoCulto(a,b,c,d,e,f,g) {
    doc("p1",a)
    doc("p2",b)
    doc("p3",c)
    doc("p4",d)
    doc("p5",e)
    doc("p6",f)
    doc("p7",g)
}


//aqui vai ficar a invocaçoes da funcoes

fraseNoticia("Se você quer ser um servo de Deus, dissemine sua palavra e seja um pedaço importante do céu aqui mesmo na Terra.",

"Desconhecido")

proximoCulto("---","---","---","---","---","---","---")
// pregadores , diacono , parte especial , trabalho de cantico2X , recpçao , sonosplastia 

// aqui a funçao pra fazer funcionar a parte de calculo dos dizimos
function calcular(){
    let sal = document.getElementById("salario").value
    let pac = document.getElementById("pacto").value

    let dizimo = sal / 10
    let valorDizimo = document.getElementById("dizimo").innerHTML = "R$ " + dizimo.toFixed(2)
    
    let pacto = (sal/100)*pac
    let valorPacto = document.getElementById("p").innerHTML = "R$ " + pacto.toFixed(2)
}