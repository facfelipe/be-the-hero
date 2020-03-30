const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(request, repsonse) {

        const ongs = await connection('ongs').select('*');

        return repsonse.json(ongs);
    },

    async create(request, response) {

        const data = { name, email, whatsapp, city, uf } = request.body;

        data.id = generateUniqueId();
    
        await connection('ongs').insert(data);
    
        return response.json(data);
    }
}
