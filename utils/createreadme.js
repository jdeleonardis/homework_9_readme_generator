const buildReadMe = (answers,gitHubStuff) => {
    // const readMeFile = `My name is ${answers.repo}!
    // I am loyal to ${answers.user}.`;

    const readMeFile = `
    ![Badge](https://img.shields.io/github/v/tag/${answers.user}/${answers.repo}?style=plastic)
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