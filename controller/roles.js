const { models: { Roles } } = require("../db");



const newRole = async ({ roleName }) => {
    try {
        const role = await Roles.query().insertAndFetch({
            role_name: roleName
        })
        return role;
    } catch (err) {
        throw new Error(err.message)
    }

};
const deleteRole = async (id, { roleName }) => {
    try {
        const deletedRole = await Roles.query().deleteById(id, {
            role_name: roleName
        })
        return "Delete completed"
    } catch (error) { 
        throw new Error(err.message)
    }
};

const getRole = async ({ roleName }) => {
    try {
        const role = await Roles.query().findOne('role_name', roleName)
        return role;
    }
    catch (error) {
        throw new Error(err.message)
    }
}

const allRoles = async () => {
    try {
        const roles = await Roles.query()
        return roles;
    } catch (error) {
        throw new Error(err.message)
    }
}

const updateRole = async (id, { role_name }) => {
    try {
        const UpdatedRole = await Roles.query().updateAndFetchById(id, {
            role_name
        })
        return UpdatedRole;
    } catch (error) {
        throw new Error(err.message)
    }
}
module.exports = { newRole, deleteRole, getRole, allRoles, updateRole };