const knex = require('knex');
const configuration = require('../../knexfile');

const config = 'test' == process.env.NODE_ENV ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;
