// Import dependencies
const {
  Shape,
  Circle,
  Triangle,
  Square,
  inputVal,
  colorVal,
} = require("./shapes");

// Circle render test (background shape)
describe("Circle", () => {
  describe("shapeColor", () => {
    it("should set the background to a red circle", () => {
      const shape = new Circle("red");
      shape.shapeColor = "red";
      expect(shape.renderCirColor()).toEqual(
        '<circle cx="150" cy="100" r="80" fill="red" />'
      );
    });
  });
});

// Circle render test (text color)
describe("Circle", () => {
  describe("textColor", () => {
    it("should set the text color to red", () => {
      const shape = new Circle("red");
      shape.textColor = "red";
      expect(shape.renderTextColor()).toEqual(
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">'
      );
    });
  });
});

// Circle render test (text content)
describe("Circle", () => {
  describe("logoText", () => {
    it("should add user text input to the logo", () => {
      const shape = new Circle("TXT");
      shape.logoText = "TXT";
      expect(shape.renderLogoText()).toEqual(`TXT</text>`);
    });
  });
});

// Triangle render test (background shape)
describe("Triangle", () => {
  describe("shapeColor", () => {
    it("should set the background to a green triangle", () => {
      const shape = new Triangle("green");
      shape.shapeColor = "green";
      expect(shape.renderTriColor()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
      );
    });
  });
});

// Triangle render test (text color)
describe("Triangle", () => {
  describe("textColor", () => {
    it("should set the text color to green", () => {
      const shape = new Triangle("green");
      shape.textColor = "green";
      expect(shape.renderTextColor()).toEqual(
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="green">'
      );
    });
  });
});

// Triangle render test (text content)
describe("Triangle", () => {
  describe("logoText", () => {
    it("should add user text input to the logo", () => {
      const shape = new Triangle("TXT");
      shape.logoText = "TXT";
      expect(shape.renderLogoText()).toEqual(`TXT</text>`);
    });
  });
});

// Square render test (background shape)
describe("Square", () => {
  describe("shapeColor", () => {
    it("should set the background to a blue square", () => {
      const shape = new Square("blue");
      shape.shapeColor = "blue";
      expect(shape.renderSqrColor()).toEqual(
        '<rect = x="80" y="30" width="140" height="140" fill="blue" />'
      );
    });
  });
});

// Square render test (text color)
describe("Square", () => {
  describe("textColor", () => {
    it("should set the text color to blue", () => {
      const shape = new Square("blue");
      shape.textColor = "blue";
      expect(shape.renderTextColor()).toEqual(
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">'
      );
    });
  });
});

// Square render test (text content)
describe("Square", () => {
  describe("logoText", () => {
    it("should add user text input to the logo", () => {
      const shape = new Square("TXT");
      shape.logoText = "TXT";
      expect(shape.renderLogoText()).toEqual(`TXT</text>`);
    });
  });
});
