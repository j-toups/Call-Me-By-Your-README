
// Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  
  ## Description 
  ${data.description}

  ## Table of Contents 
      
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
      
  ## Installation Instructions
  ${data.install}

  ## Usage
  ${data.usage}

  ## License 
  This application is licensed with ${data.license}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
   ${data.tests}`;
}

module.exports = generateMarkdown;