const inquirer = require ('inquirer');

const readmeInput = () => {
console.log(`
==============================================
Welcome!! Lets make your readme simple/quick!
 -We'll start with some required information-
==============================================
`);
    return inquirer.prompt([
        {
            // get the title
            type: 'input',
            name: 'projectName',
            message: "What is the name of your project? (essential)",
            validate: projectNameInput => {
                if (!projectNameInput) {
                  console.log('Ack! Please enter your project name-');
                  return false;
                } else {
                  return true;
                }
              }
        },
        {
            // get the description
            type: 'input',
            name: 'description',
            message: 'What does your project do? (essential)',
            validate: descriptionInput => {
                if (!descriptionInput) {
                  console.log('Ack! Please enter a description of your project-');
                  return false;
                } else {
                  return true;
                }
              }
        },
        {
            // get github username
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
            validate: usernameInput => {
                if (!usernameInput) {
                  console.log('Ack! Please enter your Github username-');
                  return false;
                } else {
                  return true;
                }
              }
        },
        {
            // get email
            type: 'input',
            name: 'email',
            message: 'What is your email (for contact on this project)?',
            validate: emailInput => {
                if (!emailInput) {
                  console.log('Ack! Please enter your email-');
                  return false;
                } else {
                  return true;
                }
              }
        },
        {
            // get contact instructions
            type: 'input',
            name: 'contactInstructions',
            message: 'How would you prefer others contact you with questions?',
            validate: contactInstructionsInput => {
                if (!contactInstructionsInput) {
                  console.log('Ack! Please enter intructions for questions/contact');
                  return false;
                } else {
                  return true;
                }
              }
        }
    ])
}

const additionalInput = () => {
    console.log(`
==============================================
                Thank you! 
    I just need a few more pieces of info-
==============================================
`);
return inquirer.prompt([
    {
        // get instalation preference
        type: 'confirm',
        name: 'installation',
        message: 'Does your project require installation?',
        default: false,
    },
    {
        // if installation confirmed yes, get installation instructions
        type: 'input',
        name: 'installationInstruc',
        message: 'Please add instructions on how to install your project',
        when: ({ installation }) => {
          if (installation) {
            return true;
          } else {
            return false;
          }
        }
    },
    {
        // get usage preference 
        type: 'confirm',
        name: 'usage',
        message: 'Would you like to include a usage description?',
        default: false,
    },
    {
        // if usage confirmed yes, get use description
        type: 'input',
        name: 'usageDesc',
        message: 'Please describe the usage of this project.',
        when: ({ usage }) => {
          if (usage) {
            return true;
          } else {
            return false;
          }
        }
    },
    {
        // get test preference
        type: 'confirm',
        name: 'testConfirm',
        message: 'Do you want to add test information?',
        default: false,
    },
    {
        // if test confirmed yes, get test information
        type: 'input',
        name: 'testInfo',
        message: 'Please provide testing information.',
        when: ({ usage }) => {
          if (usage) {
            return true;
          } else {
            return false;
          }
        }
    },
    {
        // get contributors preference
        type: 'confirm',
        name: 'confirmContributors',
        message: 'Do you want to allow contributing?',
        default: false,
    },
    {
        // if contributor confirmed yes, get contributor instructions
        type: 'input',
        name: 'contributors',
        message: 'Please add instructions for contributing to the project.',
        when: ({ confirmContributors }) => {
          if (confirmContributors) {
            return true;
          } else {
            return false;
          }
        }
    },
    {
        // get license preference
        type: 'confirm',
        name: 'licenseConfirm',
        message: 'Would you like to include a license?',
        default: false,
    },
    {
        // if license confirmed yes, give license choice
        type: 'checkbox',
        name: 'license',
        message: 'Please select your license.',
        choices: ['MIT', 'Open Software License 3.0', 'Apache license 2.0', 'GNU General Public License v3.0', 'The Unlicense'],
        when: ({ licenseConfirm }) => {
            if (licenseConfirm) {
              return true;
            } else {
              return false;
            }
          }
    }
])
}

readmeInput()
.then(additionalInput)
.then(readmeInput => {
console.log(`
==============================================
        now loading...your readme!
==============================================
`);
    // setting the variable does not work? -> const {name} = promptUser.name;
    // name of project
    console.log(readmeInput);
    // console.log(additionalInput);
    // // description
    // console.log(readmeInput.description);
    // // installation
    // console.log(readmeInput.installation);
    // // usage
    // console.log(readmeInput.usage);
    // // license
    // console.log(readmeInput.license);
    // // contributors
    // console.log(readmeInput.confirmContributors);
    // // tests
    // console.log(readmeInput.testConfirm);
    // // questions section - username
    // console.log(readmeInput.username);
    // // email
    // console.log(readmeInput.email);
    // // contact instructions
    // console.log(readmeInput.contactInstructions);
});