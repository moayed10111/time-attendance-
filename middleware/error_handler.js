
const clientError = (err,req,res,next) => {
    res.status(err.statuscode).json({ message: err.message });
};


module.exports = clientError;