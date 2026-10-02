/**
 * Checks whether the request contains a number.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Moves to the next middleware.
 */
const validateNumber = (req, res, next) => {
    const num = req.body.num;

    if (typeof(num) !== "number") {
        return res.status(400).json({
            message: "Please enter a valid number"
        });
    }
    next();
};

module.exports = validateNumber;