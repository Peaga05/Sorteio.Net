function sortear(){

    let valor = document.getElementById("textArea").value;
    let newValor = parseInt(valor);
    let randomNumber = Math.floor(Math.random()*newValor);

    if(newValor >= 1){
        document.getElementById("numRadom").innerHTML = randomNumber;
    }
    else{
        document.getElementById("numRadom").innerHTML = " ";
        alert("Digite um valor no campo!")
    }
    
}