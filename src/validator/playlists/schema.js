const Joi = require('joi');

const postPlaylistPayloadSchema = Joi.object({
  name: Joi.string().required(),
});

const postSongOnPlaylistPayloadSchema = Joi.object({
  singId: Joi.string().required(),
});

module.exports = { postPlaylistPayloadSchema, postSongOnPlaylistPayloadSchema };
