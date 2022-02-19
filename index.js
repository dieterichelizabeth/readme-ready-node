const inquirer = require ('inquirer');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your name? (Required)",
        }
    ])
}

promptUser()
.then(promptUser => {
    // setting the variable does not work? -> const {name} = promptUser.name;
    console.log(promptUser.name);
});