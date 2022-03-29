const { models: { Branches } } = require("../db");


const addBranch = async ({ branch_name, branch_location }) => {
    try {
        const newBranch = await Branches.query().insertAndFetch({
            branch_name,
            branch_location
        });
        return newBranch;
    } catch (error) {
        throw new Error(err.message);
    }
}

const getBranch = async (id) => {
    try {
        const branch = await Branches.query().findById(id)
        return branch;
    } catch (error) {
        throw new Error(err.message)
    }
}

const allBranches = async () => {
    try {
        const branches = await Branches.query();
        return branches;
    } catch (error) {
        throw new Error(err.message);
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
        throw new Error(err.message);
    }
}

const deleteBranch = async (id, { branch_name, branch_location }) => {
    try {
        const deletedBranch = await Branches.query().deleteById(id, { branch_name, branch_location })
        return deletedBranch;
    } catch (error) {
        throw new Error(err.message);
    }
}
module.exports = { addBranch, getBranch, allBranches, updateBranch, deleteBranch }