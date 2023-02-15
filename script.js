document.getElementById("confirmar").disabled = true

document.addEventListener("input", function (event) {
  var conteudo = document.getElementsByName("rate").value

  if (conteudo !== null && conteudo !== "") {
    document.getElementById("confirmar").disabled = false
  } else {
    document.getElementById("confirmar").disabled = true
  }
})
