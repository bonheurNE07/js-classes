class Person {
    constructor (name, age, country) {
        this._name = name;
        this._age = age;
        this._country = country;
    }

    set name(value) {
        if (this._name.length > 0) this._name = value;
        else console.log('Enter a Valid Name');
    }

    get name() {
        return this._name;
    }

    set age(value) {
        if (this._age > 0){
            this._age = value;
        }
        console.log("Enter a positive value");
        
    }
    get age() {
        return this._age;
    }

    set country(value) {
        if (this.country.length > 0) this._country = value;
        else console.log('Enter a Valid Country Name');
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