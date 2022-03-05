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
      ],
    },
  },
};
