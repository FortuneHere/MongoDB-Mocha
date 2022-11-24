const assert = require('assert');
const Student = require('../src/student');

describe('Read the data', () => {
  let jason;
  let jason2;

  beforeEach((done) => {
    jason = new Student({ name: 'Jason' });
    jason2 = new Student({ name: 'Jason' });
    jason.save();
    jason2.save().
    then(() => done());

    console.log(jason);
    console.log(jason2);

  });

  // it('Find all Jasons', async () => {
  //   // find выводил массив
  //   // findOne выводит одну запись
  //   const students = await Student.find({ name: 'Jason' });
  //   console.log(students);
  //   // Чтобы assert с поиском id работал без ошибок, требуется прописывать .toString()
  //   assert(students[0]._id.toString() === jason._id.toString());
  // });

  it('Find one of the Jasons', async () => {
    const students = await Student.findOne({_id: jason._id});
    console.log(students)
    assert(students.name === 'Jason')
  });
});
