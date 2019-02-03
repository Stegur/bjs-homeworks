// Задача 1

class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {}
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {

        if (typeof grade === 'string' || grade < 0 || grade > 5) {
            console.log(`Вы попытались поставить оценку "${grade}" по предмету "${subject}". Допустимый предел 0-5`);
            this.marks[subject] = [];
        } else {
            for (let name in this.marks) {
                if (name !== subject) {
                    this.marks[subject] = [grade]
                } else {
                    this.marks[subject].push(grade)
                }
            }
        }

        return this.marks;
    }
}


let log = new StudentLog('Олег Никифоров');
console.log(log.addGrade(2, 'algebra'));
console.log(log.addGrade('отлично', 'math'));

console.log(log.addGrade(4, 'algebra'));

console.log(log.addGrade(5, 'geometry'));
console.log(log.addGrade(25, 'chemistry'));

// Задача 2 

class Weapon {
    constructor(values) {
        this.name = values.name;
        this.attack = values.attack;
        this.durability = values.durability;
        this.range = values.range;
    }

    takeDamage(damage) {
        if (this.durability <= 0) {
            this.durability = 0;
        } else {
            this.durability -= damage;
        }

        return this.durability;
    }
}