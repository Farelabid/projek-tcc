import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Inventory = db.define(
  "inventories",
  {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Inventory;

(async () => {
  await db.sync();
})();
