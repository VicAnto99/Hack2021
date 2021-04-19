const dbConnection = require('../../config/dbConnection');

module.exports =  app => {
    const connection = dbConnection();
    app.get('/', (req,res) =>
        {
            connection.query('SELECT * FROM direccion', (err, result) => {
                res.render('principal',{
                    direccion: result
                });
            })
            
        }
    )
}