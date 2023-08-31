let campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input" , function() {
  console.log(campoFiltro.value)
  let todosPacientes = document.querySelectorAll(".paciente")
  for (let i = 0; i < todosPacientes.length; i++) {
    let cadaPaciente = todosPacientes[i];
    let tdNome = paciente.querySelector(".info-nome")
    let nome = paciente.textContent;
    
  }


})
