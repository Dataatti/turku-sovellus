module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6d2f400a3cc5e5770becdceed31053aa'),
  },
});
