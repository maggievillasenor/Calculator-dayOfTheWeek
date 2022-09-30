
/*Declaración de bloque*/
const days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const $dayInput = document.querySelector('#dayInput');
const $monthInput = document.querySelector('#monthInput');
const $yearInput = document.querySelector('#yearInput');
const $btn = document.querySelector('#btn');
const $inputWeekDay = document.querySelector('#inputWeekday');
const $resultado = document.querySelector('#resultado');

/*Funciones*/


const date = new Date(); //actualizar los valores de los Ids
$dayInput.value = date.getDate();
$monthInput.value = date.getMonth();
$yearInput.value = date.getYear();

$btn.addEventListener('click', () => { //funcion del botón para obtener la nueva fecha
    const day = $dayInput.value;
    const month = $monthInput.value;
    const year = $yearInput.value;
    const date = new Date(year, month -1, day); //nueva fecha
   
    function diaEntreSemana(day) {
        
        switch (day) {
          case 0: case 6:   // 0 = Domingo, 6 = Sábado
            return false;
          default:          //1 = Lunes, 2 = Martes, 3 = Miércoles, 4 = Jueves, 5 = Viernes
            return true;
        }
      }
const finDeSemana = diaEntreSemana(date.getDay());
const diaLaborable = days[date.getDay()];
/* Envía el valor de resultado al ID que le corresponde en index.html */
$resultado.value = `${diaLaborable}, ${finDeSemana ? 'día laborable' : 'fin de semana'}`;

});

