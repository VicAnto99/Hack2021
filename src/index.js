const app = require('./config/server');

require('./app/routes/inicio')(app);

//Inciamos el servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});