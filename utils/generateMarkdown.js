// create Table of contents section (ADD THE FOR LOOP TO GENERATE MARKDOWN)
const generateTableofContents = optInput => {
    const { Installation, Usage, Testing, Contributing, License } = optInput[0];
    if (!Installation, !Usage, !Testing, !Contributing, !License) {
        return '';
    } else {
        console.log(`nice`)
        return `
## Table of Contents
${generateSections(optInput)}
`
        }
};

const generateSections = optInput => {
// destructure optional info by section
const optSections= optInput[0];
// convert object to array
var optArray = Object.entries(optSections);
// check to see which optional entries were included (if any) by if there is a string
optArray.filter(([key, value]) => {
if (typeof value == "string"){
   // return the key value of the string (ex. License)
   return console.log(`* [${key}](#${key})`)
} 
});
}

// create the installation section
const generateInstallation = Installation => {
if (!Installation) {
    return '';
} else {
return `
## Installation
${Installation}
`
    };
};

// create usage section
const generateUsage = Usage => {
if (!Usage) {
    return '';
} else {
return `
## Usage
${Usage}
`
    };
};

// create Test section
const generateTest = Testing => {
if (!Testing) {
    return '';
} else {
return `
## Testing
${Testing}
`
    };
};
  
// create Contributing section
const generateContributing = Contributing => {
if (!Contributing) {
    return '';
} else {
return `
## Contributing
${Contributing}
`
    };
};

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
    if (!License) {
        return``
    } else {
    let badgelicence = License.split(' ');
    let licenseRequest = badgelicence[0];
return `
![Github license](https://img.shields.io/badge/${licenseRequest}-license-orange)
`
    }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(License, project) {
    if (!License) {
        return '';
    } else {
    // get the Username
    let copyname = project.username;
    // Get the name of the license
    var newLicense = License.split(' ');
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
    const { Installation, Usage, Testing, Contributing, License } = optInput[0];

return `
${renderLicenseBadge(License)}
# ${project.projectName}
 
${project.description}

${generateTableofContents(optInput)}
${generateInstallation(Installation)} 
${generateUsage(Usage)}
${generateTest(Testing)}
${generateContributing(Contributing)}
${renderLicenseSection(License, project)}

## Questions
${project.contactInstructions}

Github profile: https://github.com/${project.username}

Email: ${project.email}    
`;
};

module.exports = generateMarkdown;