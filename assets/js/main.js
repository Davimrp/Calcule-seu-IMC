
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){ 
        mostraResultado('Peso invalido', false);
        return;
    }
    if(!altura){ 
        mostraResultado('Altura invalida', false);
        return;
    }

    let imc = calcularImc(peso, altura);
    let resultadoImc = exibirResultado(imc);
    
    const msg = `Seu IMC é ${imc} (${resultadoImc})`
    mostraResultado(msg, true)
})

function exibirResultado(imc){
    const resultados = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3']
    
    if(imc >= 39.9) return resultados[5];
    if(imc >= 34.9) return resultados[4];
    if(imc >= 29.9) return resultados[3];
    if(imc >= 24.9) return resultados[2];
    if(imc >= 18.5) return resultados[1];
    if(imc <=18) return resultados[0];
}

function calcularImc(peso, altura){
    const imc = peso / (altura * altura);
    return imc.toFixed(2)
}

function criarP(){
    const p = document.createElement('p');
    return p;
}

function mostraResultado(msg, isValid){
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';

    const p = criarP();

    if(isValid){
        resultado.classList.remove('red');
        resultado.classList.add('paragrafo-resultado');
    }else{
        resultado.classList.add('red');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}