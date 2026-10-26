const express = require("express");
const app = express();

app.get("/productos", (req, res) => {
    res.json([
        { id: 1, nombre: "Laptop" },
        { id: 2, nombre: "Mouse" },
        { id: 3, nombre: "Teclado" }
    ]);
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Microservicio iniciado");
});