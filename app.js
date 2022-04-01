const express = require("express"); /*requerir express*/
const path = require("path"); /*requerir path*/
const app = express(); /*instanciar express*/
const PORT = process.env.PORT || 3001;

const appRouters = require("./routers/main.js"); /*requerir modulo rutas*/

app.use(express.static(path.join(__dirname, "./public"))); /*declarar carpeta pública*/

app.listen(PORT, () => {
  console.log("Servidor funcionando"); /*lanzar el servidor*/
});

app.use("/", appRouters); /*usar objetos routers*/
