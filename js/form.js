
let pegaBotao = document.querySelector("#adicionar-paciente");
pegaBotao.addEventListener("click", (buscaInformacao) => {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona") //pegando o formulario

  let paciente = obtemPacienteDoFormulario (form);
  
  let pacienteTr = montaTr(paciente);

  if(!validaPaciente(paciente)) {
    alert('Paciente Invalido, favor verificar valores digitados')
    return;
  }

  form.reset(); //limpar os campos do formulario.

  // validaPaciente(paciente);
 
  //pegando a tabela no html
  let tabela = document.querySelector("#tabela-pacientes");

  //adicionando o paciente na tabela do html
  tabela.appendChild(pacienteTr);
  
})

function obtemPacienteDoFormulario (form) {
  
  var paciente = {
    nomeForm: form.nome.value,
    pesoForm: form.peso.value,
    alturaForm: form.altura.value,
    gorduraForm: form.gordura.value,
    imcForm: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;   
}
  
// validaAltura(paciente.alturaForm);
function montaTr (paciente) {
  
  let pacienteTr = document.createElement("tr"); //criando Tr
  pacienteTr.classList.add("paciente") //adicionando a classe paciente ao Tr

//colocando os tds dentro do tr
  pacienteTr.appendChild(criaTd(paciente.nomeForm, "info-nome"));
  pacienteTr.appendChild(criaTd(paciente.pesoForm, "info-peso"));
  pacienteTr.appendChild(criaTd(paciente.alturaForm, "info-altura"));
  pacienteTr.appendChild(criaTd(paciente.gorduraForm, "info-gordura")); 
  pacienteTr.appendChild(criaTd(paciente.imcForm, "info-imc"));

  return pacienteTr;
}

function criaTd (dadoPaciente, classe) {
  let td = document.createElement("td");
  td.textContent = dadoPaciente;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  if(validaPeso(paciente.pesoForm) && validaAltura(paciente.alturaForm)) {
    return true;
  } else {
    return false;
  }

}





// titulo.addEventListener("click", (retornaClick) => {
//   console.log("Olá eu fui clicado");
// }); //adiciona um evento ao titulo (evento click, nome da função)
