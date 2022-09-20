const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const { ContactRoutes } = require('./routes');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', true); // <- ayuda a resolver conflictos con los proxy, facilitar la obtencion de la ip real del cliente

// Setteo de rutas
app.use(ContactRoutes);
app.use((req, res, next) => res.status(404).json({msg: "404 Not Found"}));

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
})
