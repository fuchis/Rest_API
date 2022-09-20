module.exports = {

    /**
     * Middleware de validacion de metodo HTTP
     * Los metodos admitidos son POST, GET y DELETE
     * Ruta /contact solo admite POST, ruta /contacts admite DELETE y GET
     * En caso de que se reciba otro metodo HTTP, lanzar respuesta HTTP con codigo de error 405
     */

    validateHttpMethod(req, res, next) {
        let route = req.path;
        let methods = [];

        if(route === '/contact'){
            methods = ['POST'];
        }else {
            methods = ['GET', 'DELETE'];
        }

        if(methods.includes(req.method)) {
            return next();
        }

        res.status(405).json('The current Method Is Not Allowed For The Route');
    }
}