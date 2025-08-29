import "dotenv/config"
import express from "express";
import db from "./config/connection"
import index from "./routes/index"

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use("/api", index)

db.once("open", () => {
    app.listen(port, () => {
        console.log(`Chocolate? I remember when they first invented chocolate...@ http://localhost:${port}`)
    });
})