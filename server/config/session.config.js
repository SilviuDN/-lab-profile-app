const session = require('express-session');
const MongoStore = require('connect-mongo');

module.exports = app => {
    app.use(
        session({
            secret: process.env.SESS_SECRET,
            resave: true,
            saveUninitialized: false,
            // unset: 'destroy',
            cookie: {
                // sameSite: 'none',
                httpOnly: true,
                maxAge: 6000000
            },
            store: MongoStore.create({
                mongoUrl: process.env.MONGODB_URI || 'mongodb://0.0.0.0/profiles'
            })
        })
    );
};