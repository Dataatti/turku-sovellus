module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '64a980504623ba4aa2e5eb5f5b56abfa'),
  },
});
