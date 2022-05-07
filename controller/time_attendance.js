const { models: { Time_attendance } } = require("../db");
const ErrorHandleing = require("../helpers/error_handleing");
const { notFoundError: { message, statusCode } } = require("../helpers/error_types");


const addTimeAttendance = async ({ user_id, shift_id, branch_id, attendance_type_id }) => {
    try {
        const newTimeAttendance = await Time_attendance.query().insertAndFetch(
            {
                user_id,
                shift_id,
                branch_id,
                attendance_type_id
            });
        return newTimeAttendance;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const getTmieAttendance = async (id) => {
    try {
        const timeAttendance = await Time_attendance.query().findById(id);
        return timeAttendance;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const getAllTimeAttendance = async()=>{
    try {
        const allTimeAttendance = await Time_attendance.query();
        return allTimeAttendance;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const deleteTimeAttendance = async(id, {user_id, shift_id, branch_id, attendance_type_id})=>{
    try {
        const deleteTimeAttendance = await Time_attendance.query().deleteById(id, {user_id, shift_id, branch_id, attendance_type_id});
        return "Time Attendance is Deleted Succefully"
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const updateTimeAttendance = async(id, {user_id, shift_id, branch_id, attendance_type_id})=>{
    try {
        const updatedTimeAttendance = await Time_attendance.query().updateAndFetchById(id, {user_id, shift_id, branch_id, attendance_type_id});
        return updatedTimeAttendance;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

module.exports = { addTimeAttendance, getTmieAttendance, getAllTimeAttendance , deleteTimeAttendance, updateTimeAttendance }