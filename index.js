const inputP = document.querySelector("#inputP")
const buttonP = document.querySelector("#buttonP")
const number = document.querySelector("#number")
function nsorteio() {
    if (inputP.value === "") {
            alert("Digite um numero")
            return
        }
    buttonP.setAttribute("disabled", true);

    const nAleatorio = Math.floor(Math.random()* 100)

    const igual = "Parabéns você acertou o resultado."
    const diferente = "Ops, não foi dessa vez."
    
    const myfunction = function (){
        if (inputP.value != nAleatorio){
         return diferente
    }else (inputP.value == nAleatorio)
    {   return igual }
    }

    const pergunta = "<div>"+ myfunction() +"</div>"

    number.innerHTML =  pergunta + nAleatorio 

    number.style.opacity = 1;

    setTimeout(function() {
        number.style.opacity = 0;
        buttonP.removeAttribute('disabled')
    }, 3000)
}
