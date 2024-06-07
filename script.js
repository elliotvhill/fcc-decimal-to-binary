const numberInput = document.getElementById('number-input');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('result');
const animationContainer = document.getElementById('animation-container');
const animationData = [
    {
        inputVal: 5,
        marginTop: 300,
        addElDelay: 1000,
    },
    {
        inputVal: 2,
        marginTop: -200,
        addElDelay: 1500,
    },
    {
        inputVal: 1,
        marginTop: -200,
        addElDelay: 2000,
    },
];

const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
        // base case
        return String(input);
    } else {
        // recursive case
        return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
};

const showAnimation = () => {
    result.innerText = 'Call Stack Animation';
    animationData.forEach((obj) => {
        setTimeout(() => {
            animationContainer.innerHTML += `
            <p
                id="${obj.inputVal}" 
                style="margin-top:${obj.marginTop}px;" 
                class="animation-frame"
            ></p>
            `;
        }, obj.addElDelay);
    });
};

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);
    if (!inputInt || isNaN(inputInt) || inputInt < 0) {
        alert('Please provide a decimal number greater than or equal to 0');
        return;
    }

    // animation trigger
    if (inputInt === 5) {
        showAnimation();
        return;
    }

    result.textContent = decimalToBinary(inputInt);
    numberInput.value = '';
};

convertBtn.addEventListener('click', checkUserInput);
numberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        checkUserInput();
    }
});
