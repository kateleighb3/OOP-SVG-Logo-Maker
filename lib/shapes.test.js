const {Circle, Square, Triangle} = require("./shapes.js");

describe("Circle test", () => {
    test("test for a circle with a #00caca background", () => {
      const shape = new Circle("red", "green", "text");
      expect(shape.render()).toContain(
        '<circle cx="150" cy="115" r="80" fill="red" />'
      );
    });
  });
  



  describe("Square test", () => {
    test("test for a square with a green background", () => {
      const shape = new Square("orange", "red", "text");
      expect(shape.render()).toContain(
        '<rect x="73" y="40" width="160" height="160" fill="orange" />'
      );
    });
  });



describe("Triangle test", () => {
    test("test for a triangle with an orange background", () => {
      const shape = new Triangle("blue", "green", "text");
      expect(shape.render()).toContain(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });