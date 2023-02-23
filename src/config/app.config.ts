export default () => ({
  environment: process.env.NODE_ENV || 'development',
  dataBase: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});
