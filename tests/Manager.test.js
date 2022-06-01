const Manager = require('../lib/Manager');

// Creates manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Matthew', 1, 'mattsilver54@yahoo.com', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Matthew', 1, 'mattsilver54@yahoo.com');

    expect(manager.getRole()).toEqual("Manager");
});