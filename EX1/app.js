const express = require('express');
const rectangleRoutes = require('./routes/rectangleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// --- Cấu hình EJS làm view engine ---
app.set('view engine', 'ejs');
app.set('views', './views');

// --- Middleware đọc dữ liệu form ---
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- Sử dụng route ---
app.use('/', rectangleRoutes);

// --- Khởi chạy server ---
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
