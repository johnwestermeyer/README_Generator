const fs = require('fs');
const inquirer = require('inquirer');
const gen = require('./utils/generateMarkdown.js')

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the project name?",
        name: "title"
    },{
        type: "input",
        message: "Whats the short description of the project? (what, why, how)",
        name: "desc"
    },{
        type: "input",
        message: "What problem did the project solve?",
        name: "prob"
    },{
        type: "input",
        message: "What features does this project have?",
        name: "feats"
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
