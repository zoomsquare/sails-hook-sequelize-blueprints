module.exports.connections = {


    somePostgresqlServer: {
        user: 'zoomsquare',
        password: process.env.LOCALHOST_DB_PW,
        database: 'user_service',
        dialect: 'postgres',
        options: {
            sync: 'force',
            dialect: 'postgres',
            host   : 'localhost',
            port   : 5432,
            logging: true
        }
    }
};
