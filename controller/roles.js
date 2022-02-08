const { models: { Roles } } = require("../db");



const newRole = async () => {
    try {
        await Roles.query().insert({
            role_name: "accountant"
        })
    } catch (err) {
        throw new Error(err.message)
    }

};
module.exports = newRole;