// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  
  ${data.description}
  
  
  ## Table of Contents (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Badges](#badges)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
 ${data.usage}  


  
  ## License
  
  ${data.license}  
  

  ## Badges
  
  ${data.badges === "commit"? "[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat)]()" : data.badges === "pull requests" ? "[![GitHub pull requests](https://img.shields.io/github/issues-pr/cdnjs/cdnjs.svg?style=flat)]()" : data.badges === "npm" ? "[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()" : "[![Issues](https://img.shields.io/github/issues-raw/tterb/PlayMusic.svg?maxAge=25000)](https://github.com/tterb/Hyde/issues)"}


  
  ## Contributing
  
  ${data.contributing}  
  
  ## Tests
  
  ${data.tests}  
    
  ## Questions
  
  Github Profile: ${data.profile}  
  Email: ${data.email}
  

 
`;
}

module.exports = generateMarkdown;
