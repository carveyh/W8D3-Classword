const reader = require("readline");
const getNum = reader.createInterface({
    input: process.stdin,
    output: process.stdout
});

getNum.question('Please enter a number:', addNumbers(0, 5) => {

})


function addNumbers(sum, numsLeft, completionCallback) {

};





// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));