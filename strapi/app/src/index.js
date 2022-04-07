"use strict";

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
    try {
      const headers = [
        {
          id: 1,
          locale: "fi",
          text: "Nostot",
          type: "nostot",
        },
        {
          id: 2,
          locale: "en",
          text: "Highlights",
          type: "nostot",
        },
        {
          id: 3,
          locale: "fi",
          text: "Tiedotteet",
          type: "tiedotteet",
        },
        {
          id: 4,
          locale: "en",
          text: "Bulletin",
          type: "tiedotteet",
        },
        {
          id: 5,
          locale: "fi",
          text: "Liikennetiedotteet",
          type: "liikennetiedotteet",
        },
        {
          id: 6,
          locale: "en",
          text: "Traffic announcements",
          type: "liikennetiedotteet",
        },
        {
          id: 7,
          locale: "fi",
          text: "Turku sovellus",
          type: "sovellus",
        },
        {
          id: 8,
          locale: "en",
          text: "Turku application",
          type: "sovellus",
        },
        {
          id: 9,
          locale: "fi",
          text: "Kerrokantasi",
          type: "kerrokantasi",
        },
        {
          id: 10,
          locale: "en",
          text: "Voice your opinion",
          type: "kerrokantasi",
        },
        {
          id: 11,
          locale: "fi",
          text: "Tapahtumat",
          type: "tapahtumat",
        },
        {
          id: 12,
          locale: "en",
          text: "What's happening in Turku",
          type: "tapahtumat",
        },
      ];

      for (const header of headers) {
        const h = await strapi
          .controller("api::header.header")
          .findOne({ params: header });

          if (!h?.data) {
          await strapi.controller("api::header.header").create({is: () => false, request: {query: {}, body: { data: header }}})
          console.log("CREATED", header.type);
        }
      }
    } catch (err) {
      console.log(err);
    }
  },
};
