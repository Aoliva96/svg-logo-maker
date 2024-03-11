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
        '<rect x="80" y="30" width="140" height="140" fill="blue" />'
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
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue" >'
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

// User text input validation
describe("inputVal", () => {
  it("should error if no text is entered by the user", () => {
    const noChar = [""];
    noChar.forEach((data) => {
      expect(inputVal(data)).toEqual(
        "Logo text required, please input up to 3 characters"
      );
    });
  });
  it("should return an error if more than 3 characters are entered by the user", () => {
    const fourChar = ["ABCD"];
    fourChar.forEach((data) => {
      expect(inputVal(data)).toEqual(
        "Character limit exceeded, please input up to 3 characters"
      );
    });
  });
  it("should return true if 1 character is entered by the user", () => {
    const oneChar = ["A"];
    oneChar.forEach((data) => {
      expect(inputVal(data)).toEqual(true);
    });
  });
  it("should return true if 2 characters are entered by the user", () => {
    const twoChar = ["AB"];
    twoChar.forEach((data) => {
      expect(inputVal(data)).toEqual(true);
    });
  });
  it("should return true if 2 characters are entered by the user", () => {
    const threeChar = ["ABC"];
    threeChar.forEach((data) => {
      expect(inputVal(data)).toEqual(true);
    });
  });
});

// User color input validation
describe("colorVal", () => {
  it("should return true if the user enters one of the basic colors described in the prompt", () => {
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
    basicColors.forEach((color) => {
      expect(colorVal(color)).toEqual(true);
    });
  });
  it("should return true if the user enters a valid hexadecimal color code", () => {
    const hexColors = [
      "#FFFFFF",
      "#000000",
      "#FF00FF",
      "#F0F",
      "#FF0303",
      "#F33",
    ];
    hexColors.forEach((color) => {
      expect(colorVal(color)).toEqual(true);
    });
  });
  it("should return an error if the color or hex code entered are invalid", () => {
    const invalidColors = ["invalid", "GGGGGGG"];
    invalidColors.forEach((data) => {
      expect(colorVal(data)).toEqual(
        "Please input a named basic color, or a hexadecimal color code starting with '#'"
      );
    });
  });
});
