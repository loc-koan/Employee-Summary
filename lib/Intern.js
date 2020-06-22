// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }
    getRole() {
        return 'Intern'; /* changed from tish's video to match other files*/
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;