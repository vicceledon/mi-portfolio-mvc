const path = require("path"); /*requerir path*/

const mainController = {
  getHome: (req, res) => {
    res.sendFile(
      path.join(__dirname, "../views/home.html")
    ); /*enviar página requerida*/
  },
  getAbout: (req, res) => {
    res.sendFile(
      path.join(__dirname, "../views/about.html")
    ); /*enviar página requerida*/
  },
};

module.exports = mainController; /*exportar objeto*/
