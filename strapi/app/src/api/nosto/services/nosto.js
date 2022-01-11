"use strict";

/**
 * nostot service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::nosto.nosto");
