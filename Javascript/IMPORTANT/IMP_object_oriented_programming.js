// class Instructor {
//     constructor({ name }) {
//       this.name = name;
//     }
//   }
  
//   const jon = new Instructor({ name: 'Jon Snow' });
//   console.log(jon.name);

//   Guide to JavaScript OOP Instance Methods ############################################################################################################################################

// class Instructor {
//     constructor({ name, role = 'assistant' }) {
//       this.name = name;
//       this.role = role;
//     }
  
//     renderDetails() {
//       console.log(`${this.name}: ${this.role}`);
//     }
//   }
  
//   const jon = new Instructor({name: 'Jon Snow'});
//   const brayden = new Instructor({name: 'Brayden', role: 'teacher'});
//   jon.renderDetails();
//   brayden.renderDetails();

//   Guide to OOP Static Methods in JavaScript ############################################################################################################################################

class Instructor {
    constructor({ name, role = "assistant" }) {
      this.role = role;
      this.name = name;
    }
  
    // Instance method
    renderDetails() {
      console.log(`${this.name} - ${this.role}`);
    }
  
    // Base case static method
    static helloWorld() {
      console.log('Hi there');
    }
  
    // Static method
    static canTeach(instructor) {
      return (instructor.role === 'classroom');
    }
  }
  
  let juniorInstructor = new Instructor({ 'name' : 'Brian' });
  let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });
  
  juniorInstructor.renderDetails(); // "Brian - assistant"
  seniorInstructor.renderDetails(); // "Alice - classroom"
  
  Instructor.helloWorld(); // "Hi there"
  
  // "Brian can teach: false"
  console.log(
    `${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`
  );
  
  // "Alice can teach: true"
  console.log(
    `${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`
  );