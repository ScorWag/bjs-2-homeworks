function Student(name, gender, age) {
  this.name = name,
  this.gender = gender,
  this.age = age
}

new Student("Antony", "male", 32);
new Student("Jessica", "female", 25);
new Student("Anastasia", "female", 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined) {
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }  
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.getAverage = function () {
  if(this.marks === undefined) {
    return 0;
  } else {
    return average = (this.marks.reduce((acc, item) => {return acc + item}, 0)) / this.marks.length;
  }  
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;    
}
