let botaoAdicionar = document.querySelector("#buscar-paciente");
botaoAdicionar.addEventListener("click" , (buscando) => {
  
  let xhr = new XMLHttpRequest(); //falando qual tipo de requisição quero
  xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json"); // pegando os dados da API

  xhr.addEventListener("load", (carregar) => { //carregando arquivo
    let resposta = xhr.responseText;
    let objPacientes = JSON.parse(resposta);
    
    objPacientes.forEach(function (objPacientes) {
      console.log(adicionaPacienteNaTabela(objPacientes))
    });

    
  })

  xhr.send();


} )

// let botaoBuscar = addEventListener("click" , (buscar) => {
//   alert("Botão clicado");
// })