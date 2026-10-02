const avgModel = require('../models/avgModel');

/**
 * Adds the received number and returns the current average.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
const calculateAvg = (req, res) => {
    const num = req.body.num;
    avgModel.addNumber(num);

    const avg = avgModel.getAvg();
    res.status(200).json({
        message: "Average calculated successfully",
        average: avg
    });
};

module.exports = { calculateAvg };