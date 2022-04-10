"use strict";

const { formatLocale } = require("@strapi/plugin-i18n/server/domain/locale.js");
const { locales, headers } = require("./seeder-data.js");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Get locale service
    const { findByCode, create, setDefaultLocale } = strapi
      .plugin("i18n")
      .service("locales");

    // Get header service
    const headerService = strapi.api["header"].services.header;

    for (const locale of locales) {
      try {
        const existingLocale = await findByCode(locale.code);
        if (!existingLocale) {
          let localeToCreate = locale;
          localeToCreate = formatLocale(localeToCreate);

          await create(localeToCreate);
          if (locale.isDefault) {
            console.log(localeToCreate);
            await setDefaultLocale({ code: locale.code });
          }
        }
      } catch (err) {
        console.error(err);
      }
    }

    for (const header of headers) {
      try {
        const found = await headerService.find({
          filters: {
            type: header.type,
          },
        });

        if (!found.results.length) {
          await headerService.create({ data: { ...header } });
          console.log("CREATED", header.type);
        }
      } catch (err) {
        console.error(err);
      }
    }
  },
};
