const mongose = require('mongoose');
const Schema = mongose.Schema;
const ArticleSchema = require('./article_schema');

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
  grade: Number,
  articles : [ArticleSchema]
});

StudentSchema.virtual('articleCount').get(function() {
  return this.articles.length
})

// Создаем саму модель
const Student = mongose.model('student', StudentSchema);

module.exports = Student;
