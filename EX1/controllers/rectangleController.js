const Rectangle = require('../models/rectangle');

exports.calculatePerimeter = (req, res) => {
  const { width, height } = req.body;

  // Kiểm tra dữ liệu nhập
  if (!width || !height) {
    return res.render('index', { perimeter: '⚠️ Vui lòng nhập đủ chiều rộng và chiều cao!' });
  }

  const rectangle = new Rectangle(Number(width), Number(height));
  const perimeter = rectangle.getPerimeter();

  res.render('index', { perimeter });
};
