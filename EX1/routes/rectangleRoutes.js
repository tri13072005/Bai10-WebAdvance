const express = require('express');
const router = express.Router();
const rectangleController = require('../controllers/rectangleController');

// Hiển thị form ban đầu
router.get('/', (req, res) => {
  res.render('index', { perimeter: null });
});

// Xử lý khi người dùng nhấn nút "Tính chu vi"
router.post('/calculate', rectangleController.calculatePerimeter);

module.exports = router;
