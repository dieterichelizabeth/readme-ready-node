// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// create the about section
const generateInstallation = usage => {
    console.log(usage);
    if (!usage) {
        console.log("fail")
      return '';
    } else {
    return `
# Installation
${usage}
`
    };
  };
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

// destructure page data by section
const { optInput, ...project } = data;
console.log(optInput);
const { installationInstruc, usageDesc, testInfo, contributors, license } = optInput[0];
console.log(usageDesc);
return `
# ${project.projectName}
 
${project.description}

${generateInstallation(usageDesc)}

# Usage

# Tests

# Contributing

# Questions

${project.username}
${project.email}
${project.contactInstructions}
    
`;
};


module.exports = generateMarkdown;

// data.contactinstructionsinput returns undefined