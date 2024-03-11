// Include packages needed
const inquirer = require("inquirer");
const fs = require("fs");
const {
  Circle,
  Triangle,
  Square,
  inputVal,
  colorVal,
} = require("./library/shapes");

// Prompt for user input
inquirer
  .prompt([
    {
      name: "text",
      type: "input",
      message: "Please input up to three letters for your logo's text:",
      validate: inputVal,
    },
    {
      name: "textColor",
      type: "input",
      message:
        "Please input a color for your text (blue, purple, red, orange, yellow, green, black, white, or enter a specific hexadecimal color code):",
      validate: colorVal,
    },
    {
      name: "shape",
      type: "list",
      message:
        "Please choose a background shape for your logo from the following options:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      name: "shapeColor",
      type: "input",
      message:
        "Please input a color for your background shape (blue, purple, red, orange, yellow, green, black, white, or enter a specific hexadecimal color code):",
      validate: colorVal,
    },
  ])
  .then((data) => {
    console.log(data.shape);

    // Create shape classes
    let shape;
    if (data.shape === "Circle") {
      shape = new Circle(data.shapeColor, data.textColor, data.logoText);
    }
    if (data.shape === "Triangle") {
      shape = new Triangle(data.shapeColor, data.textColor, data.logoText);
    }
    if (data.shape === "Square") {
      shape = new Square(data.shapeColor, data.textColor, data.logoText);
    }

    // Render output
    fs.writeFile("./output/logo.svg", shape.renderSVG(), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(
          "\x1b[32mSVG file generated, saved to output folder as 'logo.svg'\x1b[0m"
        );
      }
    });
  });
