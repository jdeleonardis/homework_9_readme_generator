const buildReadMe = (answers,gitHubStuff) => {
    // const readMeFile = `My name is ${answers.repo}!
    // I am loyal to ${answers.user}.`;

    const readMeFile = `

![Badge](https://img.shields.io/github/v/tag/${answers.user}/${answers.repo}?style=plastic)
![Badge](https://img.shields.io/github/v/release/${answers.user}/${answers.repo}?color=blue&include_prereleases&style=plastic)
![Badge](https://img.shields.io/github/issues-closed-raw/${answers.user}/${answers.repo}?color=success&style=plastic)
![Badge](https://img.shields.io/github/issues-raw/${answers.user}/${answers.repo}?color=critical&style=plastic)

# Project Title
${answers.user}

## Table of Contents:
- [Repository](#Repository)
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [License](#License)
- [Profile](#Profile)

## Repository
${answers.repo}

## Description
${answers.description}

## Installation
${answers.install}

## Usage
${answers.usage}

## Contributors
${answers.contribution}

## Tests
${answers.tests}

## License
${answers.license}

## Profile
${gitHubStuff.email}

![Avatar](${gitHubStuff.avatar_url})

`;

    return readMeFile;

};
module.exports = buildReadMe;