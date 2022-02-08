const { Model } = require('objection');
const knex = require('knex');
const models = require('./models/')

const db = knex({
    client: 'pg',
    connection: {
        database: 'time-attendance',
        port: '5432',
        host: 'localhost',
        user: 'attend-user',
        password: 'password'
    }
});

Model.knex(db);

module.exports = { db, models };