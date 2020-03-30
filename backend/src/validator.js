const { celebrate, Segments, Joi } = require('celebrate');

const hasAuthorizationRules = celebrate({
    [Segments.HEADERS]: Joi.object({
       authorization: Joi.string().required()
    }).options({ allowUnknown: true })
});

const hasPaginationRules = celebrate({
    [Segments.QUERY]: Joi.object().keys({
       page: Joi.number()
    })
});

const ongCreateRules = celebrate({
     [Segments.BODY]: Joi.object().keys({
         name: Joi.string().required().min(2).max(10),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
});

const incidentCreateRules = celebrate({
    [Segments.BODY]: Joi.object().keys({
       title: Joi.string().required().min(3).max(30),
       description: Joi.string().required().min(3).max(30),
       value: Joi.number().required()
   })
});

const incidentRemovalRules = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
       id: Joi.number().required()
    })
});

const sessionCreateRules = celebrate({
    [Segments.BODY]: Joi.object().keys({
       titlide: Joi.string().required()
   })
});

module.exports = {
    hasAuthorizationRules,
    sessionCreateRules,
    hasPaginationRules,
    ongCreateRules,
    incidentCreateRules,
    incidentRemovalRules
};
