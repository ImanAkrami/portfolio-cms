module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6863800c0aee8f55ea4322f4dc686fee'),
  },
});
