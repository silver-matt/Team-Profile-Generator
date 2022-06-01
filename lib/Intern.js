// holds the Intern's data
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, Id, email, school) {
        super(name, Id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;