module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fd1d39c3e59b2cb86dc8085c88980560'),
  },
});
