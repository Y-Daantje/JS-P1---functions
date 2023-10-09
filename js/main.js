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
    console.log('your answer is', a + b);
    const answer = a + b;

    return answer;
}
const claculator = calculateSum(3, 4);
calculateSum(30000, 6079707);


//opdr4
function calculateDivision(e, t) {
    console.log('your answer', e + t);
    const is = e + t;

    return is;
}
const result = calculateDivision(3, 4);


//opdr5
function showArrayOfNumbers(m) {
    const Array = ['1', '2', '3', '4', '5']
    for (let m = 0; m < array.length; m++) {
        const element = array[m];
        console.log(element);
    }
return m;
}
const plz = showArrayOfNumbers (m);

