const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api");

const questions = [
{
  type: "input",
  message: "Enter your GitHub username:",
  name: "user"
},
{
  type: "input",
  message: "Enter your Github Email:",
  name: "email"
},
{
  type: "input",
  message: "Enter a project title:",
  name: "title"
},
{
  type: "input",
  message: "Describe this project:",
  name: "description"
},
{
  type: "input",
  message: "How is this project installed?:",
  name: "install"
},
{
  type: "input",
  message: "How do you use this project?:",
  name: "usage"
},
{
  type: "input",
  message: "Who are the contributors to this project?:",
  name: "contribution"
},
{
  type: "input",
  message: "Enter any tests to be run:",
  name: "tests",
},
{
  type: "list",
  message: "License Selection:",
  name: "license",
  choices: ['MIT', 'Apache', 'GPL']
}
];

// function writeToFile(fileName, data) {
// return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log(inquirerResponses);
    api
      .getUser(inquirerResponses.user)
      .then(({ data }) => {
        console.log(data);
        //writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data}));
      })
  })  
}

//tag badge
//https://img.shields.io/github/v/tag/jdeleonardis/homework_9_readme_generator?style=plastic

//release badge
//https://img.shields.io/github/v/release/jdeleonardis/homework_9_readme_generator?color=blue&include_prereleases&style=plastic

//closed issues badge
//https://img.shields.io/github/issues-closed-raw/jdeleonardis/homework_9_readme_generator?color=success&style=plastic

//open issues badge
//https://img.shields.io/github/issues-raw/jdeleonardis/homework_9_readme_generator?color=critical&style=plastic

init();