class Rectangle {
    constructor (width, height) {
        this._width = width;
        this._height = height;
    }

    set width(value) {
        if (value > 0) this._width = value;
        else console.log('Enter a valid value');
    }
    get width() {
        return this._width;
    }

    set height(value) {
        if (value > 0) this._height = value;
        else console.log('Enter a valid value');
    }
    get width() {
        return this._height;
    }

    area() {
        return this._height * this._width;
    }

    perimeter() {
        return (this._height + this._width) * 2;
    }
}

rectangle = new Rectangle(20, 40);

rectangle.width = 120;
rectangle.height = 40;

console.log(rectangle.area());
console.log(rectangle.perimeter());