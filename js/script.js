document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("callbackForm");
    const inputs = {
        name: document.getElementById("name"),
        email: document.getElementById("email"),
        phone: document.getElementById("phone"),
        date: document.getElementById("date")
    };
    const errors = {
        name: document.getElementById("nameError"),
        email: document.getElementById("emailError"),
        phone: document.getElementById("phoneError"),
        date: document.getElementById("dateError")
    };

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let isValid = true;

        if (!inputs.name.value.trim()) {
            showError(inputs.name, errors.name);
            isValid = false;
        } else {
            showValid(inputs.name, errors.name);
        }

        if (!validateEmail(inputs.email.value)) {
            showError(inputs.email, errors.email);
            isValid = false;
        } else {
            showValid(inputs.email, errors.email);
        }

        if (!validatePhone(inputs.phone.value)) {
            showError(inputs.phone, errors.phone);
            isValid = false;
        } else {
            showValid(inputs.phone, errors.phone);
        }

        if (!inputs.date.value) {
            showError(inputs.date, errors.date);
            isValid = false;
        } else {
            showValid(inputs.date, errors.date);
        }

        if (isValid) {
            alert(`Имя: ${inputs.name.value}\nEmail: ${inputs.email.value}\nТелефон: ${inputs.phone.value}\nДата: ${inputs.date.value}`);
        }
    });

    function showError(input, error) {
        input.classList.add("invalid");
        input.classList.remove("valid");
        error.classList.remove("hidden");
    }

    function showValid(input, error) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        error.classList.add("hidden");
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[+]?[0-9]{10,14}$/;
        return phoneRegex.test(phone);
    }
});
