let titulo = document.querySelector(".titulo"); //pegando o que tem no h1
titulo.textContent = "Braspress"; // substituindo o que tem na variavel por uma nova string

console.log(titulo);

const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  const cadaPaciente = pacientes[i];

  const tdPeso = cadaPaciente.querySelector(".info-peso").textContent;
  const tdAltura = cadaPaciente.querySelector(".info-altura").textContent;

  const imcVazio = cadaPaciente.querySelector(".info-imc");

  const imc = tdPeso / (tdAltura * tdAltura);
  imcVazio.textContent = imc.toFixed(2);

  let pesoEhValido = true;
  let alturaEhValida = true;

  if (tdPeso <= 0 || tdPeso >= 600) {
    pesoEhValido = false;
    imcVazio.textContent = "Peso Invalido";
    cadaPaciente.classList.add("paciente-invalido");
  }

  if (tdAltura <= 0 || tdAltura >= 3.0) {
    alturaEhValida = false;
    imcVazio.textContent = "Altura Inválida";
    cadaPaciente.classList.add("paciente-invalido");
  }
}

let pegaBotao = document.querySelector("#adicionar-paciente");
pegaBotao.addEventListener("click", (buscaInformacao) => {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona") //pegando o formulario
  
  //pegando os valores dos campos
  const nomeForm = form.nome.value; 
  const pesoForm = form.peso.value; 
  const alturaForm = form.peso.value; 
  const gorduraForm = form.gordura.value; 

  let pacienteTr = document.createElement("tr"); //criando um tr

  //criando tds
  let nomeTd = document.createElement("td"); 
  let pesoTd = document.createElement("td");
  let alturaTd = document.createElement("td");
  let gorduraTd = document.createElement("td");
  let imcTd = document.createElement("td")
  
//adicionando os valores dentro das tds
  nomeTd.textContent = nomeForm;
  pesoTd.textContent = pesoForm;
  alturaTd.textContent = alturaForm;
  gorduraTd.textContent = gorduraForm;
  

//colocando os tds dentro do tr
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd); 


})

// titulo.addEventListener("click", (retornaClick) => {
//   console.log("Olá eu fui clicado");
// }); //adiciona um evento ao titulo (evento click, nome da função)

