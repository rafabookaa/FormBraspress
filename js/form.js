
let pegaBotao = document.querySelector("#adicionar-paciente");
pegaBotao.addEventListener("click", (buscaInformacao) => {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona") //pegando o formulario
  
  //pegando os valores dos campos
  const nomeForm = form.nome.value; 
  const pesoForm = form.peso.value; 
  const alturaForm = form.altura.value; 
  const gorduraForm = form.gordura.value; 
  const imcForm = calculaImc(pesoForm, alturaForm);

  let pacienteTr = document.createElement("tr"); //criando um tr

  //criando tds
  let nomeTd = document.createElement("td"); 
  let pesoTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let gorduraTd = document.createElement("td");
  let imcTd = document.createElement("td");
  
//adicionando os valores dentro das tds
  nomeTd.textContent = nomeForm;
  pesoTd.textContent = pesoForm;
  alturaTd.textContent = alturaForm;
  gorduraTd.textContent = gorduraForm;
  imcTd.textContent = imcForm.toFixed(2);
  

//colocando os tds dentro do tr
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd); 
  pacienteTr.appendChild(imcTd);

//pegando a tabela no html
  let tabela = document.querySelector("#tabela-pacientes");

  //adicionando o paciente na tabela do html
  tabela.appendChild(pacienteTr);

  
})

// titulo.addEventListener("click", (retornaClick) => {
//   console.log("Olá eu fui clicado");
// }); //adiciona um evento ao titulo (evento click, nome da função)
