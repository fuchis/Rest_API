module.exports = {
    /**
     * 
     * Obtener IP del Cliente por medio de los headers de la requests
     * regresa la ip en formato ::ffff:19X.XXX.X.XXX
     * Se formatea la ip, y se imprime en consola/terminal
     */
    getClientIP(req, res, next) {
            clientIp = req.connection.remoteAddress;
            clientIp = clientIp.split(':').slice(-1)[0];
            console.log(`Client IP: ${clientIp}`);
            return next();
    }
}