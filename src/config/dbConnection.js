const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection(
        {
            host: 'bwb8kcnltg5rvlazbcol-mysql.services.clever-cloud.com',
            user: 'uybdqnbkwqlwxq6c',
            password: 'l27yJoErrf9h52n82bDy',
            database: 'bwb8kcnltg5rvlazbcol'
        }
    );
}