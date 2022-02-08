const users = require('./users');

const routeHandler = (app) => {
    users.forEach((element) => {
        app[element.method](element.url, element.handler)
    });
};

module.exports = routeHandler;