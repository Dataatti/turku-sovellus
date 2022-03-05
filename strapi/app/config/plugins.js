module.exports = {
  "preview-button": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::nosto.nosto",
          targetField: "id",
          draft: {
            query: {
              path: "nostot",
            },
          },
          published: {
            basePath: "nostot",
          },
        },
        {
          uid: "api::ulkoinen-linkki.ulkoinen-linkki",
          targetField: "id",
          draft: {
            query: {
              ignoreId: "true",
              path: "",
            },
          },
          published: {
            basePath: "ulkoinenLinkki",
          },
        },
      ],
    },
  },
};
