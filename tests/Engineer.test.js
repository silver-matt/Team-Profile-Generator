const Manager = require('../lib/Engineer');

// Creates engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Matthew', 1, 'mattsilver54@yahoo.com', 'silver-matt');

    expect(engineer.GitHub).toEqual(expect.any(String));
});

// Gets GitHub from getGithub()
test('gets engineer GitHub value', () => {
    const engineer = new Engineer('Matthew', 1, 'mattsilver54@yahoo.com', 'silver-matt');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.GitHub.toString()));
});

// Gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Matthew', 1, 'mattsilver54@yahoo.com', 'silver-matt');

    expect(engineer.getRole()).toEqual("Engineer");
});