const fs = require('fs');
const path = require('path');

exports.getTests = (req, res, next) => {
    res.status(200).json({ testdata: 'success' });
};
