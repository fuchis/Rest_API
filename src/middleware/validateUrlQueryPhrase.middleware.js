module.exports = {
    /**
     * 
     * Middleware for URL Phrase Validation 
     * If the requests doesn't have a phrase param, it will continue its execution(return next()) 
     * If the requests has the a phrase param, it will check if the phrase is empty or not, if its empty it will throw a 400 HTTP Status
     * 
     */
    
    validateUrlQueryPhrase(req, res, next) {

        const params = req.query;

        if(params.hasOwnProperty('phrase')) {
            if(params.phrase.length > 0){
                return next();
            }else {
                res.status(400).json({})
            }
        }else {
            return next();
        }

    }
}