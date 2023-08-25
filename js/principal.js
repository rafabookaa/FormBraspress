let titulo = document.querySelector('.titulo'); //pegando o que tem no h1
titulo.textContent = 'Braspress'; // substituindo o que tem na variavel por uma nova string

console.log(titulo)

const paciente = document.querySelector('#paciente-paulo');
const tdPeso = paciente.querySelector('.info-peso').textContent
const tdAltura = paciente.querySelector('.info-altura').textContent

const imc = tdPeso / (tdAltura * tdAltura);

console.log(imc)

// const imcVazio = paciente.querySelector(".info-imc");
// imcVazio.textContent = imc;








