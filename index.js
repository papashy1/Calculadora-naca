class Calculadora {
  sumar(numero1, numero2) {
    return parseFloat(numero1) + parseFloat(numero2);
  }
  restar(numero1, numero2) {
    return parseFloat(numero1) - parseFloat(numero2);
  }
  multiplicar(numero1, numero2) {
    return parseFloat(numero1) * parseFloat(numero2);
  }
  dividir(numero1, numero2) {
    return parseFloat(numero1) / parseFloat(numero2);
  }
}

//Objeto
const calculadora = new Calculadora();

//
const botones = document.querySelectorAll('#pulsar');
const pantalla = document.querySelector('#pantalla');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const presionado = boton.textContent;
    if (presionado == 'C') {
      pantalla.textContent = '0';
      return;
    }

    if (presionado == 'DEL') {
      if (pantalla.textContent.length === 1) {
        pantalla.textContent = '0';
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }

    if (presionado == '=') {
      validar(pantalla.textContent);
      return;
    }

    if (pantalla.textContent == '0') {
      pantalla.textContent = presionado;
    } else {
      pantalla.textContent += presionado;
    }
  });
});

function validar(cadena) {
  const numeros = pantalla.textContent.split(/[+x\-.\/]/);
  const numero1 = numeros[0];
  const numero2 = numeros[1];
  const lista = pantalla.textContent.split('');
  for (let i = 0; i <= lista.length; i++) {
    if (lista[i] == '+') {
      pantalla.textContent = calculadora.sumar(numero1, numero2);
    } else if (lista[i] == '-') {
      pantalla.textContent = calculadora.restar(numero1, numero2);
    } else if (lista[i] == 'x') {
      pantalla.textContent = calculadora.multiplicar(numero1, numero2);
    } else if (lista[i] == '/') {
      pantalla.textContent = calculadora.dividir(numero1, numero2);
    }
  }
}
