
let Add = (x, y) => x + y;
let Subtraction = (x, y) => x - y;
let increase = (x, y) => x * y;
let division = (x, y) => x / y;


const a = +prompt("Enter the first number!"), b = +prompt("Enter the second number");
const sign = prompt("Choose one of these characters (enter the number in front of the selected character):   + => 1,   - => 2,   * => 3,   / => 4")

const calculator = sign == 1 ? console.log(`${a} + ${b} = ${Add(a, b)}`) : sign == 2 ? console.log(`${a} - ${b} = ${Subtraction(a, b)}`) : sign == 3 ? console.log(`${a} * ${b} = ${increase(a, b)}`) : sign == 4 ? console.log(`${a} / ${b} = ${division(a, b)}`) : console.log("Error!");
