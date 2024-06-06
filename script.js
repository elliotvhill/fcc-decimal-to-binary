const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');

const decimalToBinary = (input) => {
    // let binary = '';
    // if (input === 0) {
    //     binary = "0"
    // }
    // while (input > 0) {
    //     binary = (input % 2) + binary
    //     input = Math.floor(input / 2)
    // }
    // result.innerText = binary;

    if (input === 0 || input === 1) { // base case
        return String(input)
    } else { // recursive case
        return decimalToBinary(Math.floor(input / 2)) + (input % 2)
    }
};

const checkUserInput = () => {
    if (
        !numberInput.value ||
        isNaN(parseInt(numberInput.value)) ||
        parseInt(numberInput.value) < 0
    ) {
        alert('Please provide a decimal number greater than or equal to 0');
        return;
    }
    result.textContent = decimalToBinary(parseInt(numberInput.value));
    numberInput.value = '';
};

convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkUserInput();
    }
});

// recursion example
// const countDownAndUp = (number) => {
//     console.log(number)
//     if (number === 0) { // base case
//         console.log("Reached base case")
//         return
//     } else { // recursive case
//         countDownAndUp(number - 1)
//         console.log(number)
//     }
// }
// countDownAndUp(3)