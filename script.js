const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.boton');
const clean = document.querySelector('#clean');
const igual = document.querySelector('#igual');
const deshacerButton = document.querySelector('#deshacer');

let itsAnError = false;

const number = (e) => {
  if (itsAnError) {
    pantalla.innerHTML = e.target.innerHTML;
    itsAnError = false;
  } else {
    pantalla.innerHTML += e.target.innerHTML;
  }
};

const C = () => {
  pantalla.innerHTML = '';
};

const equal = () => {
  try {
    pantalla.innerHTML = eval(pantalla.innerHTML);
  } catch (err) {
    pantalla.innerHTML = 'Error de sintaxis';
    itsAnError = true;
  }
};

const deshacer = () => {
  pantalla.innerHTML = pantalla.innerHTML.slice(0, -1);
};

botones.forEach((boton) => {
  if (
    boton.innerHTML !== 'C' &&
    boton.innerHTML !== '=' &&
    boton !== clean &&
    boton !== igual &&
    boton !== deshacerButton
  ) {
    boton.addEventListener('click', (e) => {
      number(e);
    });
  } else if (boton === clean) {
    boton.addEventListener('click', C);
  } else if (boton === igual) {
    boton.addEventListener('click', equal);
  } else if (boton === deshacerButton) {
    boton.addEventListener('click', deshacer);
  }
});