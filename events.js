class EventEmitter {
  constructor() {
    //Objeto para almacenar los eventos (nombrepropiedad), y su lista de manejadores (valor de la propiedad)
    this.escuchadores = {};
  }

  //Registrar los escuchadores
  on(nombreEvento, manejadores) {
    //Creamos como propiedad del objeto el evento recibido
    this.escuchadores[nombreEvento] = [];

    //Añadimos a la propiedad la lista de manejadores recibidos
    this.escuchadores[nombreEvento].push(manejadores);
  }

  //Emitir los escuchadores
  emit(nombreEvento, argumentos) {
    this.escuchadores[nombreEvento].forEach((manejador) => {
      manejador(argumentos);
    });
  }
}

exports = module.exports = EventEmitter;
