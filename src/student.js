const mongose = require('mongoose');
const Schema = mongose.Schema;

// Создаем схему для модели
const StudentSchema = new Schema({
  name: {
    type: String,
    // Требует чтобы имя было введено, [true, сообщение]
    required: [true, 'Name is required'],
    // Условие, сообщение
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name is too short'
    }
  },
  studentNumber: Number,
  articleCount: Number,
  grade: Number,
});

// Создаем саму модель
const Student = mongose.model('student', StudentSchema);

module.exports = Student;
