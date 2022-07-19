let contador = document.getElementById("contador");
contador.innerText = localStorage.getItem("contador") || "0";
function incrementar() {
    contador.innerHTML = parseInt(contador.innerText) + 1;
    salvarContador()
}
function decrementar() {
    contador.innerHTML = parseInt(contador.innerText) - 1;
    salvarContador()
}
function zerar(){
    contador.innerHTML = "0"
}
function salvarContador(){
    localStorage.setItem("contador", contador.innerText);
}