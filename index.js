const inquirer = require("inquirer");
const fs = require("fs"); 
const {Circle, Square, Triangle} = require("./lib/shapes");

const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter text up to 3 characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a color:",
    },
    {
        type: "input",
        name: "shape-color",
        message: "Enter a color:",
    },
    {
        type: "list",
        name: "shape-type",
        message: "Choose a shape:",
        choices: ["Circle", "Square", "Triangle"],
    },
];


function init() {
    inquirer.prompt(questions).then((answers) => {
        let genMarkdown = generateMarkdown(answers);
    fs.writeFile('readme.md', genMarkdown, (err) => 
    err ? console.log(err) : console.log('Successfully created readme.md!')
    );
    });
};


init();