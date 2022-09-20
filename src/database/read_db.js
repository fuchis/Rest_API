// Leer BD de archivo y pasarla a objecto para poder manejarla
const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, './fakedatabase.js'), 'utf-8');
const json = JSON.parse(data);

module.exports = {
    DB : json
}