const {Circle, Square, Triangle} = require("./shapes.js");

describe("Circle test", () => {
    test("test for a circle with a #00caca background", () => {
      const shape = new Circle();
      shape.setColor("#00caca");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#00caca" />'
      );
    });
  });
  



  describe("Square test", () => {
    test("test for a square with a green background", () => {
      const shape = new Square();
      shape.setColor("green");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="green" />'
      );
    });
  });



describe("Triangle test", () => {
    test("test for a triangle with an orange background", () => {
      const shape = new Triangle();
      shape.setColor("orange");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="orange" />'
      );
    });
  });