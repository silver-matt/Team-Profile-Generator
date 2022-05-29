// holds the Engineers data
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, ID, email, GitHub) {
        super(name, ID, email);
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