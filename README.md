# svg-logo-maker

## Project Description

A study in creating an SVG image file from command line input and JavaScript.

## Contents

- [Introduction](#introduction)
- [Problem](#problem)
- [Solution](#solution)
- [Deployment](#deployment)
- [Collaborators](#collaborators)
- [Resources](#resources)
- [License](#License)

## Introduction

For this project, I set out to create an application that collects user input from the command line thru NodeJS and Inquirer, uses JavaScript to parse that data into SVG file format, and outputs a new logo based on the user's preferences. Jest is utilized for testing purposes.

## Problem

This project was developed from scratch without starter code, the client requirements were as follows:

- GIVEN a command-line application that accepts user input
- WHEN I am prompted for text
- THEN I can enter up to three characters
- WHEN I am prompted for the text color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I am prompted for a shape
- THEN I am presented with a list of shapes to choose from: circle, triangle, and square
- WHEN I am prompted for the shape's color
- THEN I can enter a color keyword (OR a hexadecimal number)
- WHEN I have entered input for all the prompts
- THEN an SVG file is created named "logo.svg"
- AND the output text "Generated logo.svg" is printed in the command line
- WHEN I open the "logo.svg" file in a browser
- THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Solution

I rectified the above problems in the following way:

- Created an index.js file to handle user input prompting, shape class creation, and final render of the SVG logo.
- Created a shapes.js file to handle shape class definition/modification, and user text/color input validation.
- Created a shapes.test.js file to handle testing through Jest.

See below for a demo video of the project functionality:

[Click link to view demo](https://app.screencastify.com/v3/watch/oWj5x7i9tJElgLKZJDID)

## Deployment

[Link to the GitHub repo for this project](https://github.com/Aoliva96/svg-logo-maker)

[Link to example SVG image output](https://github.com/Aoliva96/svg-logo-maker/blob/main/output/logo.svg)

## Collaborators

I collaborated with my classmate Keegan Royal-Eisenberg for this project. Keegan provided advice on how he solved various problems and provided his source code for reference while assisting me with this project.

## Resources

See the links below to see some of the resources I used for this project:

[MDN Webdocs | RegEx Validation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)

[MDN Webdocs | SVG Basic Shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)

[Rollbar | JavaScript Constructors](https://rollbar.com/blog/javascript-constructors/)

I utilized the EdEx Xpert Learning Assistant to clarify concepts and assist in bugfixing.

## License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project utilizes the standard MIT License.
