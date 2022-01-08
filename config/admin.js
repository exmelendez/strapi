module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f78e09aad17be7e961d17abf255b4ea7'),
  },
});
