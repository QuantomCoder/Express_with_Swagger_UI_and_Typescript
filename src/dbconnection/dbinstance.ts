import { Sequelize } from "sequelize";
const sequelize = new Sequelize({
    dialect: "postgres",
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "postgres",
    logging: false,
    query: {
      raw: true,
    }
  });
  export default sequelize