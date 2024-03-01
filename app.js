let inputs = document.querySelectorAll("input");
let submit = document.querySelector("button");
let form = document.querySelector("form");



inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        if (e.key >= 1 && e.key <= 9) {
            let currentInput = input;
            let nextInput = input.nextElementSibling;
            let prevInput = input.previousElementSibling;

            if (currentInput.value.length > 1) {
                currentInput.value = "";
            }

            if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                nextInput.removeAttribute("disabled");
                nextInput.focus();
            }
            if ((e.key == "Backspace" || e.key == "ArrowLeft") && prevInput) {
                prevInput.focus();
                currentInput.setAttribute("disabled", true);
            }

        }
        });
});


window.addEventListener("load", () => inputs[0].focus());