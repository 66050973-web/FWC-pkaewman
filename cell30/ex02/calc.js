const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const dropdown = document.getElementById("selected-dropdown");
    const calculateBtn = document.getElementById("calculate-btn");
    const resultParagraph = document.getElementById("result");

    calculateBtn.addEventListener("click", () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const selectedOption = dropdown.value;

        let result;

        switch (selectedOption) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    resultParagraph.textContent = "It’s over 9000!";
                    return;
                }
                break;
            case "modulus":
                if (num2 !== 0) {
                    result = num1 % num2;
                } else {
                    resultParagraph.textContent = "It’s over 9000!";
                    return;
                }
                break;
            default:
                resultParagraph.textContent = "Invalid operation selected.";
                return;
        }

        resultParagraph.textContent = `Result: ${result}`;
    });