const { models: { Users } } = require("../db");



const addUser = async () => {
    const newUser = await Users.query().insert({
        full_name: "Moayed"
    })

    return newUser;
};
module.exports = addUser;