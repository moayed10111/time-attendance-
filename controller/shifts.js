const { models: { Shifts } } = require("../db");



const addShift = async ({ start_shift, end_shift }) => {
    try {
        const shift = await Shifts.query().insertAndFetch({
            start_shift,
            end_shift
        });
        return shift;
    } catch (error) {
        throw new Error(err.message);
    }
}

const getShift = async (id) => {
    try {
        const shift = await Shifts.query().findById(id);
        return shift;
    } catch (error) {
        throw new Error(err.message);
    }
}

const allShifts = async () => {
    try {
        const shifts = await Shifts.query();
        return shifts;
    } catch (error) {
        throw new Error(err.message);
    }
}

const deleteShift = async (id, { start_shift, end_shift }) => {
    try {
        const deletedShift = await Shifts.query().deleteById(id, { start_shift, end_shift });
        return  "Shift is deleted";
    } catch (error) {
        throw new Error(err.message);
    }
}

const updateShift = async (id, { start_shift, end_shift }) => {
    try {
        const updatedShift = await Shifts.query().updateAndFetchById(id, { start_shift, end_shift });
        return updatedShift;
    } catch (error) {
        throw new Error(err.message);
    }
}

module.exports = { addShift, getShift, allShifts, deleteShift, updateShift }