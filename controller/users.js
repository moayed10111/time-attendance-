const { models: { Users } } = require("../db");



const addUser = async ({ fullName, email, password }) => {
    try {
        const newUser = await Users.query().insert({
            full_name: fullName
        })

        return newUser;
    } catch (error) {
        throw new Error(error.message)
    }

};

const getUser = async ({ fullName }) => {
    try {
        console.log(fullName)
        const getUser = await Users.query().findOne('full_name', fullName)
        return getUser;
    } catch (error) {
        throw new Error(error.message)
    }

};
const allUsers = async ()=>{
    try {
        const allUsers = await Users.query()
        return allUsers;
    } catch (error) {
        throw new Error(error.message)
        
    }
}
module.exports = { addUser, getUser, allUsers };