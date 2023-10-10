console.log('main log');

//opdr1
function greet() {
    //console log does not work if you dont call the function 
    console.log('hallo wereld');

}
greet();

//opdr2

function welcome() {
    //textcontent use for to print it on your webpage with a funtion call
    document.body.textContent = 'Welkom bij ROC Mondriaan'
}
welcome();

//opdr3
function calculateSum(a, b) {
    console.log('your answer is---', a + b);
    const answer = a + b;

    return answer;
}
const claculator = calculateSum(3, 4);
calculateSum(30000, 6079707);


//opdr4
function calculateDivision(e, t) {
    console.log('your answer...', e + t);
    const is = e + t;

    return is;
}
const result = calculateDivision(3, 4);


//opdr5
function showArrayOfNumbers() {
    //variabel of nmr names with the arrays
    const priemgetal = ['1', '2', '3', '4', '5'];
    //for element make a variabel n value of 0 < to the var names
    for (let n = 0; n < priemgetal.length; n++) {
        //log the nmr value
        console.log(priemgetal[n]);
    }
}
showArrayOfNumbers();

//opdr6
function showArrayOfBrands() {
    //variabel of car names with the arrays
    const automerken = ["Mercedes", "Volkswagen", "Peugeot", "Tesla", "Toyota"];
    //for element make a variabel i value of 0 < to the var names
    for (let i = 0; i < automerken.length; i++) {
        //log the car names
        console.log(automerken[i]);
    }
}

// this function give out the array elements
showArrayOfBrands();


//opdr7
let computer = 7;
let player = 5;
 let enterhogerlager = prompt('kies hoger of lager.....');
 