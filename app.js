const argv = require("./config/yargs").argv;
const colors = require("colors");
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
let comando = argv._[0];
switch (comando) {
  case "listar":
    // console.log("Listar");
    listarTabla(argv.base, argv.limite)
      .then((data) => console.log(`${data}`))
      .catch((e) => {
        console.log(e);
      });
    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archivo Creado: ${archivo}`))
      .catch((e) => {
        console.log(e);
      });
    break;
  default:
    console.log("Comando no reconocido");
}
