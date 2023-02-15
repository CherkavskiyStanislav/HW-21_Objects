// Task 1
const car = {
    model: 'cyberTruck',
    year: 2025,
    color: 'chrome',
    signal() {
        alert(`fa! fa!`)
    }
}
car.color = 'white';
console.log(car);
car.type = 'electric';
console.log(car);
car.signal();

// Task 2
const salaries = {
    fronted: 12000,
    backend: 10000,
    designer: 8000,

    dayPay() {
        alert('We must pay salary on Tuesday!');
    },
    total() {

        let sum = 0;

        for (const key in salaries) {

            if (+this[key]) {
                sum += this[key];
            }
        }
        
        console.log(sum);
    }      
}
salaries.manager = 5000;
salaries.total();

// Task 3
function Device(brend, system, cost) {

    this.brand = brend;
    this.system = system;
    this.cost = cost;

    this[Symbol.toPrimitive] = function(hint) {

        switch (hint) {
            case 'string':
                return this.brand;
            case 'number':
                return this.cost;
            case 'default':
                return `${this.brand} ${this.system} ${this.cost} // `;
        }
    }
}

const dell = new Device('Dell', 'windows', 800);
const apple = new Device('Apple', 'MAC OS', 1700);

console.log(dell);
console.log(apple);

// Task 4
console.log(String(dell));
console.log(+apple);
console.log(dell + apple);