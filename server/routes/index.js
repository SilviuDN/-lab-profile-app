module.exports = app => {
    app.use("/", require("./base.routes"))
    app.use("/api", require("./auth.routes"))
    app.use("/api/users", require("./users.routes"))
    app.use("/api/uploads", require("./uploads.routes"))
}