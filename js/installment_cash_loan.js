/* Model - Модель */

class InstallmentCalculator {

  constructor() {
    this.availableMonths = [3, 6, 9, 12, 24, 48];
    this.months = 3;
    this.sum = 0;
  }

  setSum(sum) {
    this.sum = sum;
  }

  increaseMonths() {
    let nextIndex = this.availableMonths.indexOf(this.months) + 1;
    if (nextIndex >= this.availableMonths.length) nextIndex = this.availableMonths.length - 1;
    this.months = this.availableMonths[nextIndex];
  }

  decreaseMonths() {
    let prevIndex = this.availableMonths.indexOf(this.months) - 1;
    if (prevIndex < 0) prevIndex = 0;
    this.months = this.availableMonths[prevIndex];
  }

  calculatePayment() {
    return (this.sum / this.months).toFixed(2);
  }

}


/* View - Вид */ 

class InstallmentView {

  constructor() {
    this.installmentMonthsElement = document.getElementById('installmentMonths');
    this.monthlyPaymentElement = document.getElementById('monthly-payment');
  }

  updateMonths(months) {
    this.installmentMonthsElement.innerText = months;
  }

  updateMonthlyPayment(payment) {
    this.monthlyPaymentElement.innerText = payment;
  }

}


/* Controller - Контроллер */

class InstallmentController {

  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.addEventListeners();
  }

  addEventListeners() {
    document.getElementById('plusButton').addEventListener('click', () => {
      this.model.increaseMonths();
      this.view.updateMonths(this.model.months);
      this.view.updateMonthlyPayment(this.model.calculatePayment());
    });

    document.getElementById('minusButton').addEventListener('click', () => {
      this.model.decreaseMonths();
      this.view.updateMonths(this.model.months);
      this.view.updateMonthlyPayment(this.model.calculatePayment());
    });

    document.getElementById('installmentSumInput').addEventListener('change', (event) => {
      this.model.setSum(parseFloat(event.target.value));
      this.view.updateMonthlyPayment(this.model.calculatePayment());
    });
  }

}


// Ініціалізація
const appModel = new InstallmentCalculator();
const appView = new InstallmentView();
const appController = new InstallmentController(appModel, appView);
