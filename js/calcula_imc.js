let titulo = document.querySelector(".titulo"); //pegando o que tem no h1
titulo.textContent = "Braspress"; // substituindo o que tem na variavel por uma nova string

console.log(titulo);

const pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
  const cadaPaciente = pacientes[i];

  const tdPeso = cadaPaciente.querySelector(".info-peso").textContent;
  const tdAltura = cadaPaciente.querySelector(".info-altura").textContent;

  const imcVazio = cadaPaciente.querySelector(".info-imc");

  function calculaImc (peso, altura) {
    return imc = (peso / (altura * altura)).toFixed(2);
  }
  
  calculaImc(tdPeso, tdAltura);

  imcVazio.textContent = imc;

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


