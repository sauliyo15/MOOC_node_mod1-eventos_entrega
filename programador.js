//Importamos el modulo Later.js (instalado con 'npm install later')
const later = require('later');

//Importamos el modulo events para la gestion de eventos
const EventEmitter = require('./events');


// Clase Programador.
// Configura la temperatura que se desea tener en la habitacion en todo momento.
class Programador extends EventEmitter {
	
	constructor(programacion) {

        //Llamada al constructor de la clase padre para poder continuar
        super();

		this.programacion = programacion;

        //Usar la zona horaria local.
        later.date.localTime();

        //Variable para asignar cada hora a cada intervalo
        let sched = "";

        //Recorremos el array de objetos hora-temperatura
        for (let i = 0; i < programacion.length; i++) {
            
            //Creamos la programacion a la hora deseada
            sched = later.parse.text('at '+ programacion[i].hora);
            
            //Creamos el intervalo con lo que se hara en esa programacion (hora)
            later.setInterval(() =>
                //En este caso emitimos el evento 'ideal' con la temperatura ideal para ese horario programado.
                this.emit('ideal', programacion[i].temperatura), sched
            );
        }
	}
}

exports = module.exports = Programador;