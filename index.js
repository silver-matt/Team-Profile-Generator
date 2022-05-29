// Required area
const fs = require("fs");
const inquirer = require("inquirer");

const generateHTML = require("./src/Team-Generator");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

//puts the data into an array
const teamArray = [];
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the Manager's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Manager's email address?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's Office Number?",
      },
    ])
    // makes all of the input values available in a single const
    .then((managerInput) => {
      const { name, ID, email, officeNumber } = managerInput;
      const manager = new Manager(name, ID, email, officeNumber);
      teamArray.push(manager);
      console.log(manager);
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        //   lets us choose between two roles
        type: "list",
        name: "role",
        message: "What is the Employee's role?",
        choices: ["Intern", "Engineer"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the Employee's name?",
      },
      {
        type: "input",
        name: "ID",
        message: "What is the Employee's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Employee's email address?",
      },
      {
        //   Includes 'when' to only include value if we declare that role
        type: "input",
        name: "GitHub",
        message: "What is the Engineer's GitHub?",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What is the Intern's School?",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Add another employee?",
        default: false,
      },
    ])
    .then((employeeInput) => {
      let { name, ID, email, role, GitHub, school, confirmAddEmployee } =
        employeeInput;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, ID, email, GitHub);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, ID, email, school);
        console.log(employee);
      }
      teamArray.push(employee);
      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};
// writes the file to the new location
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        console.log(data),
        err ? console.log(err) : console.log("HTML with team data created!")
    })
} 

addManager()
.then(addEmployee).then(teamArray => {
    return generateHTML(teamArray);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
})