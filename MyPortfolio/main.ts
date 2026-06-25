function filter(age: number, height: number): void {
    if (age < 8) {
        console.log("Вход запрещен, слишком мал");
    } else if (age >= 8 && age <= 18 && height < 140) {
        console.log("Вход только с родителями");
    } else {
        console.log("Добро пожаловать на аттракцион!");
    }
}

console.log("Задача 1");
const age1 = 7;
const height1 = 130;
const age2 = 12;
const height2 = 135;
const age3 = 19;
const height3 = 178;
const age4 = 16;
const height4 = 160;
console.log(age1, ", ", height1);
filter(age1, height1);
console.log(age2, ", ", height2);
filter(age2, height2);
console.log(age3, ", ", height3);
filter(age3, height3);
console.log(age4, ", ", height4);
filter(age4, height4);

console.log("Задача 2");
var sum = 0;
for (let number = 1; number < 201; number++) {
    if (number % 3 === 0 && number % 5 !== 0) {
        sum += number;
    }
}
console.log(sum);

console.log("Задача 3");
for (let num = 15; num > 1; num--) {
    if (num % 2 === 0) {
        console.log(num);
    } else {
        console.log(num * 2);
    }
}

console.log("Задача 4");
var account = 10000;
for (let cycle = 0; cycle < 10; cycle++) {
    account *= 1.08;
    console.log(account);
}
console.log(account);

console.log("Задача 5");
var stairs = "#";
for (let floorNumber = 1; floorNumber < 7; floorNumber++) {
    console.log(stairs);
    stairs += "#";
}

console.log("Задача 6");
for (let index = 1; index <= 50; index++) {
    if (index % 4 === 0 && index % 7 === 0) {
        console.log("BeepBoop");
    } else if (index % 4 === 0) {
        console.log("Beep");
    } else if (index % 7 === 0) {
        console.log("Boop");
    }
}

console.log("Задача 7");
var n = 17;
console.log("n = ", n);
for (let index = 0; index < 15; index++) {
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = n * 3 + 1;
    }
    console.log(index + 1, ":", n);
}
