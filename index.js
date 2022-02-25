const inquirer = require ('inquirer');
const fs = require ('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const promptRequired = () => {
  console.log(`
===================================================
  Welcome!! Lets make your readme simple/quick!
   -We'll start with some required information-
===================================================
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

const promptOptional = (readmeData) => {
  
  // Array to hold optional entries
  readmeData.optInput = [];

console.log(`
====================================================================
                        Thank you! 
            I just need a few more pieces of info-
      This next section is optional- mark 'y' if applicable
Pressing enter on "VIM" promts will place you in VIM INSERT MODE. 
    Please enter your instructions, with steps if applicable.
    For seperated lines on the readme, press enter twice 
  Please put code blocks on their own line, wrapped in back ticks. 
            Once completed, press escape, then :wq 
          Your input will be logged as recieved. :D
====================================================================
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
          type: 'editor',
          name: 'installationInstruc',
          message: 'Please add instructions on how to install your project. (VIM)',
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
          type: 'editor',
          name: 'usageDesc',
          message: 'Please describe the usage of this project. (VIM)',
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
          type: 'editor',
          name: 'testInfo',
          message: 'Please provide testing information for your project. (VIM)',
          when: ({ testConfirm }) => {
            if (testConfirm) {
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
          type: 'editor',
          name: 'contributors',
          message: 'Please add instructions for contributing to your project. (VIM)',
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
          type: 'list',
          name: 'license',
          message: 'Please select your license.',
          choices: ['mit (MIT)', 'osl3.0 (Open Software License 3.0)', 'apache2.0 (Apache license 2.0)', 'gpl3.0 (GNU General Public License v3.0)', 'unlicense (The Unlicense)'],
          when: ({ licenseConfirm }) => {
              if (licenseConfirm) {
                return true;
              } else {
                return false;
              }
            }
      }
    ])

  // add the readmeData to previous answers
  .then(answers => {
    readmeData.optInput.push(answers);
    return readmeData;
  })
}

// call order
promptRequired()
.then(promptOptional)
.then(readmeData => {
  console.log(`
==============================================
        now loading...your readme!
==============================================
`);
  // console.log(readmeData);
  const readMe = generateMarkdown(readmeData);
    fs.writeFile('./product/readme.md', readMe, err => {
      if (err) throw new Error(err);
      console.log(`
=====================================================
  readme.md complete!...check the 'product' folder
=====================================================
      `);
    });
});