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
        {
            // get usage description
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage of this project.',
        },
        {
            // get license preference
            type: 'input',
            name: 'license',
            message: 'Which license would you like to use?',
        },
        {
            // get contributors preference
            type: 'confirm',
            name: 'confirmContributors',
            message: 'do you want to add a contributor?',
        },
        {
            // get test preference
            type: 'confirm',
            name: 'testConfirm',
            message: 'Do you want to add test?',
        },
        {
            // get github username
            type: 'input',
            name: 'username',
            message: 'Please enter your GitHub username',
        },
        {
            // get email
            type: 'input',
            name: 'email',
            message: 'Please enter your email for contact.',
        },
        {
            // get contact instructions
            type: 'input',
            name: 'contactInstructions',
            message: 'Please enter instructions on how to reach you for questions',
        }
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
    // usage
    console.log(readmeInput.usage);
    // license
    console.log(readmeInput.license);
    // contributors
    console.log(readmeInput.confirmContributors);
    // tests
    console.log(readmeInput.testConfirm);
    // questions section - username
    console.log(readmeInput.username);
    // email
    console.log(readmeInput.email);
    // contact instructions
    console.log(readmeInput.contactInstructions);
});