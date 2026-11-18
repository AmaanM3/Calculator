
const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "C") {
            display.value = "";

        } else if (value === "=") {

            // Easter Egg
            if (display.value === "999") {
                display.value = "Easter Egg 👋";
                return;
            }

            try {
                const expression = display.value;

                if (!/^[0-9+\-*/.\s]+$/.test(expression)) {
                    throw new Error("Invalid input");
                }

                const result = Function(
                    '"use strict"; return (' + expression + ')'
                )();

                if (!Number.isFinite(result)) {
                    throw new Error("Invalid result");
                }

                display.value = result;

            } catch (error) {
                display.value = "Error";
            }

        } else {
            if (
                display.value === "Error" ||
                display.value === "Hej Amaan 👋"
            ) {
                display.value = "";
            }

            display.value += value;
        }
    });
});
