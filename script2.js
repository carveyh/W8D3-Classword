// const { get } = require("http");
const reader = require("readline");
const getNum = reader.createInterface({
    input: process.stdin,
    output: process.stdout
});

debugger

// getNum.question('Please enter a number:', addNumbers(0, 5) => {

// })


function addNumbers(sum, numsLeft, completionCallback) {
    getNum.question('Please enter a number:', userNum => {
        sum += parseInt(userNum, 10);
        if (numsLeft == 1) {
            getNum.close();
            return completionCallback(sum);
        } else {
            console.log(sum);
            addNumbers(sum, numsLeft - 1, completionCallback);
        };
    });
};




addNumbers(0, 3, (sum) => console.log(`Total Sum: ${sum}`));