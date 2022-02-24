// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// create the installation section
const generateInstallation = instructions => {
if (!instructions) {
    return '';
} else {
return `
# Installation
${instructions}
`
    };
};

// create usage section
const generateUsage = usage => {
if (!usage) {
    return '';
} else {
return `
# Usage
${usage}
`
    };
};

// create Test section
const generateTest = test => {
if (!test) {
    return '';
} else {
return `
# Tests
${test}
`
    };
};
  
// create Contributing section
const generateContributing = contribute => {
if (!contribute) {
    return '';
} else {
return `
# Contributing
${contribute}
`
    };
};

// create License section
const generateLicense = license => {
if (!license) {
    return '';
} else {
return `
# Licensing
${license}
`
    };
};
      

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    // destructure page data by section
    const { optInput, ...project } = data;

    // destructure optional info by section
    const { installationInstruc, usageDesc, testInfo, contributors, license } = optInput[0];

return `
# ${project.projectName}
 
${project.description}

${generateInstallation(installationInstruc)}

${generateUsage(usageDesc)}

${generateTest(testInfo)}

${generateContributing(contributors)}

${generateLicense(license)}

# Questions
${project.contactInstructions}
${project.username}
${project.email}    
`;
};

module.exports = generateMarkdown;