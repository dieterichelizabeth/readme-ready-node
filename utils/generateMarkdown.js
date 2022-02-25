// create Table of contents section (ADD THE FOR LOOP TO GENERATE MARKDOWN)
const generateTableofContents = optInput => {
    let newArray = optInput[0];
    const getTable = newArray.filter(function(complete) {
        if (!complete) {
          return false;
        }
    });
    console.log(getTable);
};

// create the installation section
const generateInstallation = instructions => {
if (!instructions) {
    return '';
} else {
return `
## Installation
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
## Usage
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
## Tests
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
## Contributing
${contribute}
`
    };
};

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return``
    } else {
    let badgelicence = license.split(' ');
    let licenseRequest = badgelicence[0];
return `
![Github license](https://img.shields.io/badge/${licenseRequest}-license-orange)
`
    }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, project) {
    if (!license) {
        return '';
    } else {
    // get the Username
    let copyname = project.username;
    // Get the name of the license
    var newLicense = license.split(' ');
        // remove first two values of array
        newLicense.shift();
        newLicense.shift();
    var licenseName = newLicense.join(' ').toString();

    return `
## License & copywrite
© ${copyname}

Licensed under the ${licenseName} License.
`
    };
}
      

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    // destructure page data by section
    const { optInput, ...project } = data;

    // destructure optional info by section
    const { installationInstruc, usageDesc, testInfo, contributors, license } = optInput[0];

return `
${renderLicenseBadge(license)}
# ${project.projectName}
 
${project.description}

${generateInstallation(installationInstruc)} 
${generateUsage(usageDesc)}
${generateTest(testInfo)}
${generateContributing(contributors)}
${renderLicenseSection(license, project)}

## Questions
${project.contactInstructions}

Github profile: https://github.com/${project.username}

Email: ${project.email}    
`;
};

module.exports = generateMarkdown;
