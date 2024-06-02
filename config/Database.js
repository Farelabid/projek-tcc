import { Sequelize } from "sequelize";

const db = new Sequelize("inventory_db", "root", "M;9.d#v=_}o&=ICq", {
  host: "34.135.7.19",
  dialect: "mysql",
});

export default db;
