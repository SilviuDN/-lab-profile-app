require("dotenv").config();
require("./db");

const express = require("express");
const app = express();

require("./config")(app)
// require("./config/cors.config")(app)
require("./config/session.config")(app)

// 👇 Start handling routes here
// const indexRoutes = require("./routes/index.routes");
// app.use("/api", indexRoutes);
require("./routes")(app)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
// require("./error-handling")(app);

module.exports = app;
