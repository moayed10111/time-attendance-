const { models: { Users } } = require("../db");
const { generateToken } = require("../middleware/auth");
const { models: { Roles } } = require("../db")


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
        throw new Error(error.message)
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

const getUser = async ({ fullName }) => {
    try {
        console.log(fullName)
        // I will use the withGraphFetche her .withGraphFetched('roles')
        const getUser = await Users.query().findOne({fullName:fullName})
        return getUser;
    } catch (error) {
        throw new Error(error.message) 
    }

};
const allUsers = async () => {
    try {
        const allUsers = await Users.query()
        return allUsers;
    } catch (error) {
        throw new Error(error.message)

    }
}

const updateUser = async (id, {
    fullName,
    email,
    phoneNumber,
    password
}) => {
    try {
        const updatedItems = await Users.query().updateAndFetchById(id, {
            full_name: fullName,
            email,
            phoneNumber,
            password
        })
        return updatedItems;
    } catch (error) {
        throw new Error(err.message);
    }
}

const deleteUser = async (id) => {
    try {
        const deletedUser = await Users.query().deleteById(id)
        return deletedUser;
    } catch (error) {
        throw new Error(err.message)
    }
}

module.exports = { addUser, getUser, allUsers, login, updateUser, deleteUser };