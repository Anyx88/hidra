// const { WebSocketServer } = require('ws');

// // Creamos el servidor únicamente en el puerto 8085
// const wss = new WebSocketServer({ port: 8085 });

// console.log("🚀 Servidor puente activado en el puerto 8085...");
// console.log("Esperando que abras tu archivo hidra.html...");

// wss.on('connection', (ws) => {
//   console.log('✅ ¡Tu página web de VS Code se ha conectado con éxito!');

//   // Lista de colores que emulan el movimiento del sensor en Tinkercad
//   const colores = ["ROJO", "VERDE", "AZUL"];
  
//   // Envía un color diferente automáticamente cada 2.5 segundos
//   const intervalo = setInterval(() => {
//     if (ws.readyState === ws.OPEN) {
//       const colorDetectado = colores[Math.floor(Math.random() * colores.length)];
//       ws.send(colorDetectado); 
//       console.log(`Dato enviado a la web: ${colorDetectado}`);
//     }
//   }, 2500); 

//   ws.on('close', () => {
//     clearInterval(intervalo);
//     console.log('❌ Página web desconectada.');
//   });
// });
