const { models: { Users } } = require("../db");
const { generateToken } = require("../middleware/auth");
const ErrorHandleing = require("../helpers/error_handleing");
const { notFoundError: { message, statusCode } } = require("../helpers/error_types");


const addUser = async ({ fullName, email, phone_number, password, role_id }) => {
    try {
        const newUser = await Users.query().insert({
            fullName,
            email,
            phone_number,
            password,
            role_id
        })

        return newUser;
    } catch (error) {
        console.log(error)
        throw new ErrorHandleing(error.message, statusCode);

    }

};

const login = async ({ email, password }) => {
    try {
        const login = await Users.query().findOne({
            email: email,
            password: password
        })
        if (!login) throw new Error("Not Found")
        const token = generateToken(login.id);
        return { login, token };
    } catch (error) {
        throw new Error(error.message)

    }
};

const getUser = async (id) => {
    try {
        const getUser = await Users.query().withGraphFetched('roles').findById(id);
        return getUser;
    } catch (error) {
        console.log(error);
        throw new ErrorHandleing(message, statusCode);
    }

};
const allUsers = async () => {
    try {
        const allUsers = await Users.query()
        return allUsers;
    } catch (error) {
        throw new ErrorHandleing(message, statusCode);
    }
}

const updateUser = async (id, {
    fullName,
    email,
    phone_number,
    password,
    role_id
}) => {
    try {
        const updatedItems = await Users.query().updateAndFetchById(id, {
            fullName,
            email,
            phone_number,
            password,
            role_id
        })
        return updatedItems;
    } catch (error) {
        console.log(error)
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const deleteUser = async (id,{fullName, email, phone_number, password, role_id}) => {
    try {
        const deletedUser = await Users.query().deleteById(id, { fullName, email, phone_number, password, role_id })
        return "deleted one User";
    } catch (error) {
        console.log(error)
        throw new ErrorHandleing(error.message, statusCode);
    }
}

module.exports = { addUser, getUser, allUsers, login, updateUser, deleteUser };