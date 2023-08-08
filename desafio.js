//ANTES DE EMPEZAR:
//Copia este código base completo en un nuevo archivo llamado desafio.js

//-----------------------------------------------------------------------//

//JUGADORES:
// NO MODIFICAR LOS NOMBRES DE ESTOS OBJETOS
// (El test automático les cambia los valores para probar que el resto 
// de la lógica funcione bien)

const jugadorUno = {
    nombre: "Marce", 
    habilidades: {
    ataque: 75,
    velocidad: 45,
    vida: 60,
    magia: 120,
    },
    articulos: ["espada", "escudo", "varita"],
};
const jugadorDos = {
    nombre: "Flor",
    habilidades: {
    ataque: 70,
    velocidad: 30,
    vida: 80,
    magia: 140,
    },
    articulos: ["escudo", "varita", "capa", "pocion"],
};


  //-----------------------------------------------------------------------//

  //PUNTOS INICIALES DEL JUEGO:
  //Estas variables servirán para almacenar los puntos ganados por cada jugador.
  //Cada vez que un jugador gana en una habilidad determinada se deberá
  //sumar 1 punto en el contador correspondiente:
// var contadorPuntosJug1 = 0;
// var contadorPuntosJug2 = 0;

//   //Ganador:
// var ganador;

  //-----------------------------------------------------------------------//

  //COMPARACIÓN POR PODER DE ATAQUE

  //La indicación ++ luego de la variable contadorPuntosJug suma 1 punto al
  //contador. Según la condición que se cumpla, se irán sumando los puntos.

  //EJEMPLO ESTRUCTURA DE COMPARACIÓN

// if (habilidadACompararJugador1 > habilidadACompararJugador2) {
//     contadorPuntosJug1 = contadorPuntosJug1 + 1;
// } else if (condiciónCasoContrario) {
//     contadorPuntosJug2++;
// } else {
//     contadorPuntosJug1++;
//     contadorPuntosJug2++;
// }

  // (Escribir debajo el código que te permita generar esta comparación)

  let contadorPuntosJug1 = 0;
  let contadorPuntosJug2 = 0;
  
  

if (jugadorUno.habilidades.ataque > jugadorDos.habilidades.ataque) {
  contadorPuntosJug1 =  contadorPuntosJug1 + 1;
} else if (jugadorUno.habilidades.ataque < jugadorDos.habilidades.ataque){
  contadorPuntosJug2 = contadorPuntosJug2 + 1;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}


  //-----------------------------------------------------------------------//

//   //COMPARACIÓN POR VELOCIDAD:
if (jugadorUno.habilidades.velocidad > jugadorDos.habilidades.velocidad) {
  contadorPuntosJug1 =  contadorPuntosJug1 + 1;
} else if (jugadorUno.habilidades.velocidad < jugadorDos.habilidades.velocidad){
  contadorPuntosJug2 = contadorPuntosJug2 + 1;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}
  //-----------------------------------------------------------------------//

//   //COMPARACIÓN POR NIVEL DE VIDA:
//   //(Escribir debajo el código que te permita generar esta comparación)
if (jugadorUno.habilidades.vida > jugadorDos.habilidades.vida) {
  contadorPuntosJug1 =  contadorPuntosJug1 + 1;
} else if (jugadorUno.habilidades.vida < jugadorDos.habilidades.vida){
  contadorPuntosJug2 = contadorPuntosJug2 + 1;
} else {
  contadorPuntosJug1++;
  contadorPuntosJug2++;
}

  //-----------------------------------------------------------------------//

  //COMPARACIÓN POR MAGIA:
  if (jugadorUno.habilidades.magia > jugadorDos.habilidades.magia) {
    contadorPuntosJug1 =  contadorPuntosJug1 + 1;
  } else if (jugadorUno.habilidades.magia < jugadorDos.habilidades.magia){
    contadorPuntosJug2 = contadorPuntosJug2 + 1;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }

  

  //-----------------------------------------------------------------------//


  //COMPARACIÓN POR CANTIDAD DE ARTÍCULOS
  //(Escribir debajo el código que te permita generar esta comparación)

  if (jugadorUno.articulos.length > jugadorDos.articulos.length) {
    contadorPuntosJug1 = contadorPuntosJug1 + 1;
  } else if (jugadorUno.articulos.length < jugadorDos.articulos.length) {
    contadorPuntosJug2 = contadorPuntosJug2 + 1;
  } else {
    contadorPuntosJug1++;
    contadorPuntosJug2++;
  }
//   //-----------------------------------------------------------------------//

  //DEFINIENDO EL GANADOR DE LA PARTIDA
  //En este espacio deberás generar la comparación final de puntos
  //que determine al ganador. Mostrar en la terminal el nombre del jugador que ganó la partida

  let ganador;

  if (contadorPuntosJug1 > contadorPuntosJug2) {
    ganador = jugadorUno.nombre;
  } else if (contadorPuntosJug1 < contadorPuntosJug2) {
    ganador = jugadorDos.nombre;
  } else {
    ganador = "Empate";
  }
  
  // Mostrar el resultado:
  console.log("Marce:", contadorPuntosJug1, "Flor:", contadorPuntosJug2,ganador === "Empate"
  ? "La partida terminó en empate."
  : "El ganador es: " + ganador + ".");
