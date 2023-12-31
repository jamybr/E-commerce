'use strict'; 

const limparFormulario = () => {
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}
const eNumero = (numero) => /^[0-9]+$/.test(numero); 
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const preencherForumulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    
    if(cepValido(cep.value)){
        const dados = await fetch(url); 
        const addres = await dados.json(); 
        
        if(addres.hasOwnProperty('erro')){ 
            alert('CEP não encontrado!');
        }else {
            preencherForumulario(addres);
        }
    }else{
        alert('CEP incorreto!');
    } 
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);