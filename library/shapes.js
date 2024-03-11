// Define Shape class constructor
class Shape {
  constructor(shapeColor, textColor, logoText) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.logoText = logoText;
  }
}

// Conditionally modify shape classes, extend as children of 'Shape'
class Circle extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  renderCirColor() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
  }
  renderTextColor() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">`;
  }
  renderLogoText() {
    return `${this.logoText}</text>`;
  }
  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />${this.renderCirColor()}${this.renderTextColor()}${this.renderLogoText()}</svg>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  renderTriColor() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
  renderTextColor() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">`;
  }
  renderLogoText() {
    return `${this.logoText}</text>`;
  }
  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />${this.renderTriColor()}${this.renderTextColor()}${this.renderLogoText()}</svg>`;
  }
}

class Square extends Shape {
  constructor(shapeColor, textColor, logoText) {
    super(shapeColor, textColor, logoText);
  }
  renderSqrColor() {
    return `<rect x="80" y="30" width="140" height="140" fill="${this.shapeColor}" />`;
  }
  renderTextColor() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}" >`;
  }
  renderLogoText() {
    return `${this.logoText}</text>`;
  }
  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />${this.renderSqrColor()}${this.renderTextColor()}${this.renderLogoText()}</svg>`;
  }
}

// User input validation
function inputVal(data) {
  if (data.length < 1) {
    return "Logo text required, please input up to 3 characters";
  } else if (data.length > 3) {
    return "Character limit exceeded, please input up to 3 characters";
  } else {
    return true;
  }
}

function colorVal(data) {
  const hexColorRegex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i;
  const basicColors = [
    "blue",
    "purple",
    "red",
    "orange",
    "yellow",
    "green",
    "black",
    "white",
  ];

  if (basicColors.includes(data)) {
    return true;
  } else if (hexColorRegex.test(data)) {
    return true;
  } else {
    return "Please input a named basic color, or a hexadecimal color code starting with '#'";
  }
}

// Export
module.exports = { Circle, Triangle, Square, inputVal, colorVal };
