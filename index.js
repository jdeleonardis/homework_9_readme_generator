const inquirer = require("inquirer");
const fs = require("fs");
const apiCall = require("./utils/api");
const createReadMe = require("./utils/createreadme");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
{
  type: "input",
  message: "Enter your GitHub username:",
  name: "user"
},
{
  type: "input",
  message: "Enter a project title:",
  name: "title"
},
{
  type: "input",
  message: "What is the github repo name?:",
  name: "repo",
  default: process.cwd().split('\\').pop()
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
  choices: ['MIT', 'Apache', 'GPL'],
  default: 'MIT'
}
];

async function writeFile() {
  try {
    const answers = await inquirer.prompt(questions)
    apiCall(answers.user, async function (data) { //data comes back in data var.  contains github image and email address.
      const returnedFile = createReadMe(answers,data);      
      await writeFileAsync("README.md", returnedFile);
    });
  }
  catch (err) {
    console.log(err);
  }

}
writeFile();


