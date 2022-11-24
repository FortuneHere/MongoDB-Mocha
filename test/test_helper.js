const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students_test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once('open', () => console.log('We are connected'))
  .on('error', (error) => {
    console.warn('An error occured', error);
  });

//Очищает БД
// done - функция, суть которой - обозначает - все законченно можно продолжать
beforeEach((done) => {
  mongoose.connection.collections.students.drop();
  done();
});
