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