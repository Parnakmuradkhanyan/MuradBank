document.addEventListener("DOMContentLoaded", function() {

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const maxCategories = 3;

    checkboxes.forEach(checkbox => {

        checkbox.addEventListener("change", function() {

            const checkedCategories = document.querySelectorAll('input[type="checkbox"]:checked');

            if (checkedCategories.length > maxCategories) {

                this.checked = false;
                alert("You already chose 3 categories, please choose another instead of third");

            }

        });

    });


});

function AlertMessage(){

    alert("Cateogries were chosen");
    
}

document.addEventListener('DOMContentLoaded', function() {

    const checkbox1 = document.getElementById('category1');
    const checkbox2 = document.getElementById('category2');
    const checkbox3 = document.getElementById('category3');
    const checkbox4 = document.getElementById('category4');
    const checkbox5 = document.getElementById('category5');
    const checkbox6 = document.getElementById('category6');
    const checkbox7 = document.getElementById('category7');

    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
    checkbox4.checked = false;
    checkbox5.checked = false;
    checkbox6.checked = false;
    checkbox7.checked = false;

});
