// Person constructor
class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
    exercise() {
      console.log(`${this.name} says: Running is fun! - said no one ever.`);
    }
    fetchJob() {
      console.log(`${this.name} is a ${this.job}.`);
    }
  }
  
  // Programmer constructor inheriting from Person
  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true; // Default 
    }
  
    completeTask() {
      this.busy = false;
    }
  
    acceptNewTask() {
      this.busy = true;
    }
  
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
  
    learnLanguage(newLanguage) {
      this.languages.push(newLanguage);
    }
  
    listLanguages() {
      return this.languages.join(", ");
    }
  }
  
  // cases
  const person1 = new Person("Harold", "Backend Engineer", 20);
  const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
  const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
  const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
  const c4 = new Programmer("Jorge","Junior Developer" ,24, ["HTML","CSS","JS"])
  
  c1.learnLanguage("CSS");
  c2.learnLanguage("C++");
  c3.learnLanguage("JAVA");
  c4.learnLanguage("Python")
  
  console.log(c1.listLanguages()); // Output: HTML, C#, LUA, CSS
  console.log(c2.listLanguages()); // Output: HTML, SASS, Ruby, C++
  console.log(c3.listLanguages()); // Output: HTML, CSS, JS, R, JAVA
  console.log(c4.listLanguages());
  
  console.log(person1);
  console.log(c1);
  console.log(c2);
  console.log(c3);
  console.log(c4);
  
  person1.exercise();
  person1.fetchJob();
  