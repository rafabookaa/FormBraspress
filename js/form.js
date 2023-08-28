
let pegaBotao = document.querySelector("#adicionar-paciente");
pegaBotao.addEventListener("click", (buscaInformacao) => {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona") //pegando o formulario

  let paciente = obtemPacienteDoFormulario (form);
  
  let pacienteTr = montaTr(paciente);
  console.log(pacienteTr);
  
 

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

function montaTr (paciente) {
  
  let pacienteTr = document.createElement("tr");  
  let nomeTd = document.createElement("td"); 
  let pesoTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let gorduraTd = document.createElement("td");
  let imcTd = document.createElement("td");
  
//adicionando os valores dentro das tds
  nomeTd.textContent = paciente.nomeForm;
  pesoTd.textContent = paciente.pesoForm;
  alturaTd.textContent = paciente.alturaForm;
  gorduraTd.textContent = paciente.gorduraForm;
  imcTd.textContent = paciente.imcForm;
  

//colocando os tds dentro do tr
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd); 
  pacienteTr.appendChild(imcTd);


  return pacienteTr;

}



// titulo.addEventListener("click", (retornaClick) => {
//   console.log("Olá eu fui clicado");
// }); //adiciona um evento ao titulo (evento click, nome da função)
