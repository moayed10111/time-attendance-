const { models: { Attendance_type } } = require("../db");
const { query } = require("../db/models/roles");

const addAttendType = async ({ type }) => {
    try {
        const attendanceType = await Attendance_type.query().insertAndFetch({ type });
        return attendanceType;
    } catch (error) {
        throw new Error(err.message);
    }
}

const getAttendType = async (id) => {
    try {
        const attendType = await Attendance_type.query().findById(id);
        return attendType;
    } catch (error) {
        throw new Error(err.message);
    }
}

const allAttendTypes = async () => {
    try {
        const AttendanceTypes = await Attendance_type.query();
        return AttendanceTypes;
    } catch (error) {
        throw new Error(err.message)
    }
}

const updateAttendType = async (id, { type }) => {
    try {
        const updatedAttendType = await Attendance_type.query().updateAndFetchById(id, { type });
        return updatedAttendType;
    } catch (error) {
        throw new Error(err.message);
    }
}

const deleteAttendType = async (id, { type }) => {
    try {
        const deletedAttendType = await Attendance_type.query().deleteById(id, { type });
        return 'Attendance type is deleted'
    } catch (error) {
        throw new Error(err.message);
    }
}
module.exports = { addAttendType, getAttendType, allAttendTypes, updateAttendType, deleteAttendType }