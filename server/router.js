module.exports = (app) => {
    
    app.get('/', function(req, res, next) {
        res.send({ "hi": "there" });
    });

}
