const { models: { Attendance_type } } = require("../db");
const ErrorHandleing = require("../helpers/error_handleing");
const { notFoundError: { message, statusCode } } = require("../helpers/error_types");

const addAttendType = async ({ type }) => {
    try {
        const attendanceType = await Attendance_type.query().insertAndFetch({ type });
        return attendanceType;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const getAttendType = async (id) => {
    try {
        const attendType = await Attendance_type.query().findById(id);
        return attendType;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const allAttendTypes = async () => {
    try {
        const AttendanceTypes = await Attendance_type.query();
        return AttendanceTypes;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const updateAttendType = async (id, { type }) => {
    try {
        const updatedAttendType = await Attendance_type.query().updateAndFetchById(id, { type });
        return updatedAttendType;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const deleteAttendType = async (id, { type }) => {
    try {
        const deletedAttendType = await Attendance_type.query().deleteById(id, { type });
        return 'Attendance type is deleted'
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}
module.exports = { addAttendType, getAttendType, allAttendTypes, updateAttendType, deleteAttendType }