var inquirer = require("inquirer");
var fs = require("fs");

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
  })  
}

// function init() {
//    inquirer.prompt(questions).then((inquirerResponses) => {
//      console.log(inquirerResponses);
//      api
//        .getUser(inquirerResponses.username)
//        .then(({ data }) => {
//            writeToFile("README.md", generateMarkdown({ ...inquirerResponses, ...data}));
//        })
//   })
// }

init();