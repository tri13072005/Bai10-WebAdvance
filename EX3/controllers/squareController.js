const Square = require('../models/square');

exports.showForm = async (req, res) => {
    try {
        const squares = await Square.find().sort({ _id: -1 }).limit(5);
        res.render('index', { perimeter: null, area: null, squares });
    } catch (err) {
        res.render('index', { perimeter: null, area: null, squares: [] });
    }
};

exports.calculateSquare = async (req, res) => {
    const { sideLength } = req.body;

    const perimeter = 4 * sideLength;
    const area = sideLength * sideLength;

    try {
        const square = new Square({ sideLength, perimeter, area });
        await square.save();

        const squares = await Square.find().sort({ _id: -1 }).limit(5);
        res.render('index', { perimeter, area, squares });
    } catch (err) {
        res.render('index', { perimeter, area, squares: [] });
    }
};