document.addEventListener('DOMContentLoaded', (event) => {
    const display = document.forms['calculator'].elements['display'];

    function addToDisplay(value) {
        let tmp = display.value;
        if (tmp === "Error") {
            tmp = '';
        }
        display.value = tmp + value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculate() {
        try {
            let res = eval(display.value);
            res = parseFloat(res.toFixed(2));
            display.value = res;
        } catch (e) {
            display.value = 'Error';
        }
    }

    // Event listeners for buttons
    const buttons = document.querySelectorAll('.buttons input[type="button"]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            if (value === 'AC') {
                clearDisplay();
            } else if (value === 'DE') {
                display.value = display.value.toString().slice(0, -1);
            } else if (value === '=') {
                calculate();
            } else {
                addToDisplay(value);
            }
        });
    });

    // Event listener for keyboard input
    document.addEventListener('keydown', (e) => {
        const key = e.key;
        if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
            addToDisplay(key);
        } else if (key === 'Enter') {
            calculate();
        } else if (key === 'Escape') {
            clearDisplay();
        } else if (key === 'Backspace') {
            display.value = display.value.toString().slice(0, -1);
        }
    });
});
