const { models: { Branches } } = require("../db");
const ErrorHandleing = require("../helpers/error_handleing");
const { notFoundError: { message, statusCode } } = require("../helpers/error_types");


const addBranch = async ({ branch_name, branch_location }) => {
    try {
        const newBranch = await Branches.query().insertAndFetch({
            branch_name,
            branch_location
        });
        return newBranch;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const getBranch = async (id) => {
    try {
        const branch = await Branches.query().findById(id)
        return branch;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const allBranches = async () => {
    try {
        const branches = await Branches.query();
        return branches;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const updateBranch = async (id, { branch_name, branch_location }) => {
    try {
        const updatedBranch = await Branches.query().updateAndFetchById(id, {
            branch_name,
            branch_location
        })
        return updatedBranch;
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}

const deleteBranch = async (id, { branch_name, branch_location }) => {
    try {
        const deletedBranch = await Branches.query().deleteById(id, { branch_name, branch_location })
        return "Branch is deleted succesfully ";
    } catch (error) {
        throw new ErrorHandleing(error.message, statusCode);
    }
}
module.exports = { addBranch, getBranch, allBranches, updateBranch, deleteBranch }