const inquirer = require ('inquirer');

const readmeInput = () => {
    console.log(`
=================
Welcome!! Lets make your readme simple/quick!
=================
`);

    return inquirer.prompt([
        {
            // get the title
            type: 'input',
            name: 'name',
            message: "What is your project title? (Required)",
        },
        {
            // get the description
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project. (required)',
        },
        {
            // get instalation instructions - needs more options (a confirm? then steps after 1.2.3.etc)
            type: 'confirm',
            name: 'installation',
            message: 'Does your project require installation?',
        },
    ])
}

readmeInput()
.then(readmeInput => {
    // setting the variable does not work? -> const {name} = promptUser.name;
    // name of project
    console.log(readmeInput.name);
    // description
    console.log(readmeInput.description);
    // installation
    console.log(readmeInput.installation);
});