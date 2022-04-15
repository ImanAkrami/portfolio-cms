const parse = require("pg-connection-string").parse;
const DATABASE_URL =
  "postgres://localDbUser:localDbPassword@127.0.0.1:5422/personal-portfolio-cms";
const config = parse(DATABASE_URL);

module.exports = () => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: false,
    },
    debug: false,
  },
});
