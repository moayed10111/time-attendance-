const { models: { Users_shifts } } = require("../db");
const ErrorHandleing = require("../helpers/error_handleing");
const { notFoundError: { message, statusCode } } = require("../helpers/error_types");

const addUsersShifts = async (user_id, shift_id) => {
    try {
        const addedUsersShifts = await Users_shifts.query().insertAndFetch(user_id, shift_id);
        return addedUsersShifts;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}


const getUserShift = async (id) => {
    try {
        const userShift = await Users_shifts.query().findById(id);
        return userShift;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const allUsersShifts = async () => {
    try {
        const allShifts = await Users_shifts.query();
        return allShifts;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const updateUserShifts = async (id, { user_id, shift_id }) => {
    try {
        const updatedUserShifts = await Users_shifts.query().updateAndFetchById(id, { user_id, shift_id });
        return updatedUserShifts;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const deleteUserShifts = async(id, {user_id, shift_id})=>{
    try {
        const deletedUserShifts= await Users_shifts.query().deleteById(id, {user_id, shift_id});
        return "User Shit is deleted Succefully"
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

module.exports = { addUsersShifts, getUserShift, allUsersShifts, updateUserShifts, deleteUserShifts }