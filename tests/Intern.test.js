const Manager = require('../lib/Intern');

// Creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Matthew', 1, 'mattsilver54@yahoo.com', 'SFSU');

    expect(intern.school).toEqual(expect.any(String));
});

// Gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Matthew', 1, 'mattsilver54@yahoo.com', 'SFSU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Matthew', 1, 'mattsilver54@yahoo.com', 'SFSU');

    expect(intern.getRole()).toEqual("Intern");
});