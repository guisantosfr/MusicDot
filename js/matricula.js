const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const contadorCursos = document.querySelector(".total-cursos");
const contadorHoras = document.querySelector(".total-horas");
const botaoMatricula = document.querySelector(".botao-matricula");

let totalHoras = 0;
let totalCursos = 0;

Array.from(checkboxes).forEach(checkbox =>
  checkbox.addEventListener('click', e => adicionaCurso(checkbox)));


function adicionaCurso(checkbox) {
  if (checkbox.checked) {
    totalCursos++;
    totalHoras += parseInt(checkbox.value);
  }
  else {
    totalCursos--;
    totalHoras -= parseInt(checkbox.value);
  }

  contadorCursos.textContent = `${totalCursos} curso(s)`;
  contadorHoras.textContent = `${totalHoras}h`;
}

botaoMatricula.addEventListener('click', confirmaMatriculas);

//No clique de confirmar matricula, executa isso
function confirmaMatriculas() {
  if (totalCursos === 0) {
    alert('Nenhum curso selecionado');
  } else {
    alert('Matrícula confirmada nos cursos!');
    window.location.href = 'index.html';
  }
}
