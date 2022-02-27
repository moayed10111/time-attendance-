const { models: { Roles } } = require("../db");



const newRole = async ({roleName}) => {
    try {
        await Roles.query().insert({
            role_name: roleName
        })
        return roleName;
    } catch (err) {
        throw new Error(err.message)
    }

};
module.exports = newRole;