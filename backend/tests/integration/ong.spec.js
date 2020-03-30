const request  = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should bem able to create a new ONG',  async () => {
    const response = await request(app)
        .post('/ongs')
        .send({
            name: "name test",
            email: "mailtest@gmail.com",
            whatsapp: "41984722882",
            city: "Curitiba",
            uf: "PR"
        });
        expect(
          response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8); 
  });
});
