/*Модель*/

class TypePasswordModel {

    constructor() {
        this.password = "";
    }

    addDigit(digit) {
        if (this.password.length < 4) {
            this.password += digit;
        }
    }

    clear() {
        this.password = "";
    }

    isComplete() {
        return this.password.length === 4;
    }

    checkPassword() {
        if (this.password === "1234") {
            window.location.href = "main_bank.html";
        }
    }
}

/*Контроллер*/

class TypePasswordController {

    constructor(model) {

        this.model = model;

    }

    handleButtonClick(digit) {

        this.model.addDigit(digit);
        this.updateCircles();

        if (this.model.isComplete()) {
            this.model.checkPassword();
        }

    }

    passWordClear() {

        this.model.clear();
        this.updateCircles();

    }

    updateCircles() {

        const circles = ["circle-1", "circle-2", "circle-3", "circle-4"];

        for (let i = 0; i < circles.length; i++) {
            const circle = document.getElementById(circles[i]);
            if (i < this.model.password.length) {
                circle.classList.add("circle-password-fill");
            } else {
                circle.classList.remove("circle-password-fill");
            }
        }

    }
}

/*Ініціалізація*/

const passwordModel = new TypePasswordModel();
const passwordController = new TypePasswordController(passwordModel);

function handleButtonClick(digit) {

    passwordController.handleButtonClick(digit);
    
}

function passWordClear() {

    passwordController.passWordClear();

}
