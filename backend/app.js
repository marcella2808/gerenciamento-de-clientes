const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");
const clienteRoutes = require("./routes/clienteRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static("../frontend/public"));

app.use("/clientes", clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
