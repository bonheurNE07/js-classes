class Vehicle {
    constructor (model, year) {
        this.model = model;
        this.year = year;;
    }

    displayInfo () {
        console.log(`Model: ${this.model}\nYear: ${this.year}`);
    }
}

class Car extends Vehicle {
    constructor (model, year, nmbr_doors) {
        super(model, year);
        this.nmbr_doors = nmbr_doors;
    }

    displayInfo () {
        console.log(`Model: ${this.model}\nYear: ${this.year}\nNumber of doors: ${this.nmbr_doors}`);
    }
}


toyota = new Car();
toyota.model = 'toyota';
toyota.year = 2024;
toyota.nmbr_doors = 4;

toyota.displayInfo();