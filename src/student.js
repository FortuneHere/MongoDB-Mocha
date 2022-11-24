const mongose = require('mongoose');
const Schema = mongose.Schema;

// Создаем схему для модели
const StudentSchema = new Schema({
  name: String,
  studentNumber: Number,
});

// Создаем саму модель
const Student = mongose.model('student', StudentSchema);

module.exports = Student;
