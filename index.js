const fs = require('fs');
const inquirer = require('inquirer');
const gen = require('./utils/generateMarkdown.js')

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Project name? ",
        name: "title"
    },{
        type: "input",
        message: "Description of the project? ",
        name: "desc"
    },{
        type: "input",
        message: "Installation instructions? ",
        name: "install"
    },{
        type: "input",
        message: "Usage information? ",
        name: "usage"
    },{
        type: "input",
        message: "Contribution guidelines? ",
        name: "contrib"
    },{
        type: "input",
        message: "Tests? ",
        name: "tests"
    },{
        type: "list",
        message: "License? ",
        name: "license",
        choices: ["MIT", "AGPL", "GNU"]
    },{
        type: "input",
        message: "GitHub username?",
        name: "user"
    },{
        type: "input",
        message: "Email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        let text = gen.generateMarkdown(response);
        try {            
            writeToFile("README.md", text)
          } catch (error) {
            console.error(error);
    }})

}

// function call to initialize program
init();
