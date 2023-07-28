const inquirer = require("inquirer");
const fs = require("fs"); 
const path = require("path");
const {Circle, Square, Triangle} = require("./lib/shapes");


async function generateSVGLogo() { //tell function to wait while user inputs answers
    try{
        const userInput = await inquirer.prompt([ 
            {
                type: "input",
                name: "text",
                message: "Enter text up to 3 characters:",
            },
            {
                type: "input",
                name: "textColor",
                message: "Enter a font color:",
            },
            {
                type: "input",
                name: "shapeColor",
                message: "Enter a color for the shape:",
            },
            {
                type: "list",
                name: "shapeType",
                message: "Choose a shape:",
                choices: ["Circle", "Square", "Triangle"],
            },
        ]);

        //then
    let shape;
    switch (userInput.shapeType) { // switch = shorthand for if
        case 'Circle':
            shape = new Circle(userInput.shapeColor, userInput.textColor, userInput.text);
            break;
        case 'Triangle':
            shape = new Triangle(userInput.shapeColor, userInput.textColor, userInput.text);
            break;
    
        case 'Square':
            shape = new Square(userInput.shapeColor, userInput.textColor, userInput.text);
            break;
        }
        //then
    const svgLogo = shape.render();
    console.log("SVG Logo content:");
    console.log(svgLogo);
//then
const logoFilePath = path.join(__dirname, 'logo.svg');
   fs.writeFileSync(logoFilePath, svgLogo);

    //then
    console.log("Generated logo.svg");
    } catch (error) {
        console.log("Error generating logo");
    }
};

generateSVGLogo();