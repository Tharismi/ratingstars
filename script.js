let confirmar = document.getElementById("confirmar")

document.addEventListener("input", function (event) {
  var conteudo = document.getElementsByName("rate").value

  if (conteudo !== null && conteudo !== "") {
    confirmar.classList.add("ativado")
    confirmar.classList.remove("desativado")
  } else {
    confirmar.classList.remove("ativado")
  }
})
