const { models: { Roles } } = require("../db");
const ErrorHandleing = require("../helpers/error_handleing");
const { notFoundError: { message, statusCode } } = require("../helpers/error_types");


const newRole = async ({ role_name }) => {
    try {
        const role = await Roles.query().insertAndFetch({
            role_name
        })
        return role;
    } catch (err) {
        throw new ErrorHandleing(error.message, statusCode);
    }

};
const deleteRole = async (id, { role_name }) => {
    try {
        const deletedRole = await Roles.query().deleteById(id, {
            role_name
        })
        return "Delete completed"
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
};

const getRole = async (id) => {
    try {
        const role = await Roles.query().findById(id)
        return role;
    }
    catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const allRoles = async () => {
    try {
        const roles = await Roles.query()
        return roles;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const updateRole = async (id, { role_name }) => {
    try {
        const UpdatedRole = await Roles.query().updateAndFetchById(id, {
            role_name
        })
        return UpdatedRole;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}
module.exports = { newRole, deleteRole, getRole, allRoles, updateRole };