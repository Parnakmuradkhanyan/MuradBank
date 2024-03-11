
const usdDepositPercentageButton = document.getElementById('usdDepositPercentageButton');
const uahDepositPercentageButton = document.getElementById('uahDepositPercentageButton');
const eurDepositPercentageButton = document.getElementById('eurDepositPercentageButton');
const percentDeposit = document.getElementById('percentDeposit');



let currencyAmount;

let currency;



usdDepositPercentageButton.addEventListener('click', () => {
    percentDeposit.textContent = '3';
    currency = 'USD';

    const currencyAmountLink = document.getElementById('currencyAmountLink');

    function amount(event) {
        event.preventDefault();
        let currencyAmount = document.getElementById('usdDepositPercentageButton');
        localStorage.setItem('usdDepositPercentageButton', currencyAmount.value);
        window.location.href = "deposit_select_amount_of_money.html";
    };

    currencyAmountLink.addEventListener('click', () => {
        currencyAmount= "$";
    });

    const plusButton = document.getElementById('plusButton');
    const minusButton = document.getElementById('minusButton');
    const depositPercentPermonth = document.getElementById('depositPercentPermonth');

    const monthsText = document.getElementById('monthsText');
    let months = 3;

    plusButton.addEventListener('click', () => {
        if (months < 12) {
            months += 3;
            monthsText.textContent = months;
            depositPercentPermonth.textContent = calculateInterestRate(months, currency);
        }
    });

    minusButton.addEventListener('click', () => {
        if (months > 3) {
            months -= 3;
            monthsText.textContent = months;
            depositPercentPermonth.textContent = calculateInterestRate(months, currency);
        }
    });



    function calculateInterestRate(months, currency) {
        let interestRate;

        if (currency === 'USD') {

            interestRate = 3;
            if (months === 12) {
                interestRate = 3;
            } else if (months === 9) {
                interestRate = 2.25;

            }  else if (months === 6) {
                interestRate = 1.5;

            }  else if (months === 3) {
                interestRate = 0.75;

            } 



        } else if (currency === 'UAH') {

            interestRate = 20;
            if (months === 12) {
                interestRate = 20;
            } else if (months === 9) {
                interestRate = 15;
            }  else if (months === 6) {
                interestRate = 10;
            }  else if (months === 3) {
                interestRate = 5;
            } 

        } else if (currency === 'EUR') {

            interestRate = 3;
            if (months === 12) {
                interestRate = 3;
            } else if (months === 9) {
                interestRate = 2.25;
            }  else if (months === 6) {
                interestRate = 1.5;
            }  else if (months === 3) {
                interestRate = 0.75;
            } 
        }

        return interestRate;
    }

});

uahDepositPercentageButton.addEventListener('click', () => {
    percentDeposit.textContent = '20';
    currency = 'UAH';

    const currencyAmountLink = document.getElementById('currencyAmountLink');

    currencyAmountLink.addEventListener('click', () => {
        currencyAmount= "₴";
    });



    const plusButton = document.getElementById('plusButton');
    const minusButton = document.getElementById('minusButton');
    const depositPercentPermonth = document.getElementById('depositPercentPermonth');
    const monthsText = document.getElementById('monthsText');
    let months = 3;

    plusButton.addEventListener('click', () => {
        if (months < 12) {
            months += 3;
            monthsText.textContent = months;
            depositPercentPermonth.textContent = calculateInterestRate(months, currency);
        }
    });

    minusButton.addEventListener('click', () => {
        if (months > 3) {
            months -= 3;
            monthsText.textContent = months;
            depositPercentPermonth.textContent = calculateInterestRate(months, currency);
        }
    });




    function calculateInterestRate(months, currency) {
        let interestRate;

        if (currency === 'USD') {

            interestRate = 3;
            if (months === 12) {
                interestRate = 3;
            } else if (months === 9) {
                interestRate = 2.25;
            }  else if (months === 6) {
                interestRate = 1.5;
            }  else if (months === 3) {
                interestRate = 0.75;
            } 



        } else if (currency === 'UAH') {

            interestRate = 20;
            if (months === 12) {
                interestRate = 20;
            } else if (months === 9) {
                interestRate = 15;
            }  else if (months === 6) {
                interestRate = 10;
            }  else if (months === 3) {
                interestRate = 5;
            } 

        } else if (currency === 'EUR') {

            interestRate = 3;
            if (months === 12) {
                interestRate = 3;
            } else if (months === 9) {
                interestRate = 2.25;
            }  else if (months === 6) {
                interestRate = 1.5;
            }  else if (months === 3) {
                interestRate = 0.75;
            } 
        }

        return interestRate;
    }

});

eurDepositPercentageButton.addEventListener('click', () => {
    percentDeposit.textContent = '3';
    currency = 'EUR';

    const currencyAmountLink = document.getElementById('currencyAmountLink');

    currencyAmountLink.addEventListener('click', () => {
        currencyAmount= "€";
    });


    const plusButton = document.getElementById('plusButton');
    const minusButton = document.getElementById('minusButton');
    const depositPercentPermonth = document.getElementById('depositPercentPermonth');
    const monthsText = document.getElementById('monthsText');
    let months = 3;

    plusButton.addEventListener('click', () => {
        if (months < 12) {
            months += 3;
            monthsText.textContent = months;
            depositPercentPermonth.textContent = calculateInterestRate(months, currency);
        }
    });

    minusButton.addEventListener('click', () => {
        if (months > 3) {
            months -= 3;
            monthsText.textContent = months;
            depositPercentPermonth.textContent = calculateInterestRate(months, currency);
        }
    });




    function calculateInterestRate(months, currency) {
        let interestRate;

        if (currency === 'USD') {

            interestRate = 3;
            if (months === 12) {
                interestRate = 3;
            } else if (months === 9) {
                interestRate = 2.25;
            }  else if (months === 6) {
                interestRate = 1.5;
            }  else if (months === 3) {
                interestRate = 0.75;
            } 



        } else if (currency === 'UAH') {

            interestRate = 20;
            if (months === 12) {
                interestRate = 20;
            } else if (months === 9) {
                interestRate = 15;
            }  else if (months === 6) {
                interestRate = 10;
            }  else if (months === 3) {
                interestRate = 5;
            } 

        } else if (currency === 'EUR') {


            interestRate = 3;
            if (months === 12) {
                interestRate = 3;;
            } else if (months === 9) {
                interestRate = 2.25;
            }  else if (months === 6) {
                interestRate = 1.5;
            }  else if (months === 3) {
                interestRate = 0.75;
            } 
        }

        return interestRate;
    }


});
