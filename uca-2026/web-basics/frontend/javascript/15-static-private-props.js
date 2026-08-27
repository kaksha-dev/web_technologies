class ConstructStudent {
  #percentage;
  static percentage;
  constructor(name, age, email, marks) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.marks = marks; // not relevant for a private property
  }

  calculatePercentage = () => {
    this.#percentage = (this.marks / 1000) * 100;
  };

  getPercentage = () => {
    this.calculatePercentage();
    return this.#percentage;
  };
}

const student1 = new ConstructStudent("name1", 20, "a@a.com", 86);
console.log(student1.getPercentage());
