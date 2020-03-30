const express = require('express');
const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

const validator = require('./validator');

routes.post('/sessions', validator.sessionCreateRules, SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', validator.ongCreateRules, OngController.create);

routes.get('/incidents', validator.hasPaginationRules, IncidentController.index);
routes.post('/incidents', validator.incidentCreateRules, IncidentController.create);
routes.delete('/incidents/:id', validator.incidentRemovalRules, IncidentController.delete);

routes.get('/profile', validator.hasAuthorizationRules, ProfileController.index);

module.exports = routes;
