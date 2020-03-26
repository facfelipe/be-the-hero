const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, repsonse) {

        const ongs = await connection('ongs').select('*');

        return repsonse.json(ongs);
    },

    async create(request, response) {

        const data = { name, email, whatsapp, city, uf } = request.body;

        data.id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert(data);
    
        return response.json(data);
    }

}