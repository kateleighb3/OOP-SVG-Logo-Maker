class Shape {
    constructor(shapeColor, textColor, text) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.text = text;
    }

  }

  class Circle extends Shape {
    
    render() {
      return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
  }
  
  class Square extends Shape {
    
    render() {
      return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
  }
  
  class Triangle extends Shape {
    
    render() {
      return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    }
  }
  
  module.exports = {Circle, Square, Triangle};
  