// Define Shape class
class Shape {
  constructor(logoText, textColor, shapeColor) {
    this.logoText = logoText;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
}

// Conditionally modify Shape class
class Circle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }
  renderLogoText() {
    return `${this.logoText}</text>`;
  }
  renderTextColor() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">`;
  }
  renderCirColor() {
    return `<circle cx="150" cy="100" r="80"  fill="${this.shapeColor}" />`;
  }
  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />${this.renderLogoText()}${this.renderTextColor()}${this.renderCirColor()}</text></svg>`;
  }
}

class Triangle extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }
  renderLogoText() {
    return `${this.logoText}</text>`;
  }
  renderTextColor() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">`;
  }
  renderTriColor() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }
  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />${this.renderLogoText()}${this.renderTextColor()}${this.renderTriColor()}</text></svg>`;
  }
}

class Square extends Shape {
  constructor(logoText, textColor, shapeColor) {
    super(logoText, textColor, shapeColor);
  }
  renderLogoText() {
    return `${this.logoText}</text>`;
  }
  renderTextColor() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">`;
  }
  renderTriColor() {
    return `<rect x="80" y="30" width="140" height="140" fill="${this.shapeColor}" />`;
  }
  renderSVG() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="white" />${this.renderLogoText()}${this.renderTextColor()}${this.renderTriColor()}</text></svg>`;
  }
}
