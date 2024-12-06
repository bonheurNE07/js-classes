class Person {
    constructor (name, age, country) {
        this._name = name;
        this._age = age;
        this._country = country;
    }

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    set age(value) {
        this._age = value;
    }
    get age() {
        return this._age;
    }

    set country(value) {
        this._country = value;
    }
    get country() {
        return this._country;
    }

    displayInfo() {
        console.log(`Name: ${this._name}\nAge: ${this._age}\nCountry: ${this._country}`);
    }
}

let person1 = new Person('Ndeze', 22, 'DRC');
let person2 = new Person('Bonheur', 24, 'Rwanda');

person1.displayInfo();
person2.displayInfo();