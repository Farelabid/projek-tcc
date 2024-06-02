import express from "express";
import cors from "cors";
import InventoryRoute from "./routes/InventoryRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(InventoryRoute);

app.listen(5000, () => console.log("Server up and running..."));
