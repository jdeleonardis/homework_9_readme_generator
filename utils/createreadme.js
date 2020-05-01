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

## GitHub Repository
${answers.repo}

## Project Description
${answers.description}

## Project Installation
${answers.install}

## Project Usage
${answers.usage}

## Project Contributors
${answers.contribution}

## Tests For This Project
${answers.tests}

## License
${answers.license}

## GitHub Email Address
${gitHubStuff.email}

## Profile Picture
![Avatar](${gitHubStuff.avatar_url})

`;

    return readMeFile;

};
// user
// title
// repo
// description
// install
// usage
// contribution
// tests
// license
//![Badge](${answers.badges})
//login
//avatar_url
//![Avatar](${avatar})

module.exports = buildReadMe;