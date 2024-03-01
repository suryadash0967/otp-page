let inputs = document.querySelectorAll("input");
let submit = document.querySelector("button");
let form = document.querySelector("form");



inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
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
        if (e.key == "Backspace" && prevInput) {
            prevInput.focus();
            currentInput.setAttribute("disbled", true);
        }

        
    })
});


window.addEventListener("load", () => inputs[0].focus());