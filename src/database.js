const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/notes-deb-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  })
  .then((db) => console.log("Base de datos conectada"))
  .catch((err) => console.log("Error en la base de datos:", err));
