// holds the Engineers data
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, Id, email, GitHub) {
        super(name, Id, email);
        this.GitHub = GitHub;
    }
    getGitHub() {
        return this.GitHub;
    }
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;