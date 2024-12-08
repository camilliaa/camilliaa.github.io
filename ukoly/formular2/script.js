document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");
    form.addEventListener("submit", (event) => {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});

function validateForm() {
    const errors = [];
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameRegex = /^[a-zA-Zá-žÁ-Ž\s]+$/;
    const surnameRegex = /^[a-zA-Zá-žÁ-Ž\s]+$/;
    const phoneRegex = /^\d{9}$/;
    const addressRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
    const cityRegex = /^[a-zA-Zá-žÁ-Ž\s]+$/;

    if (!name || !nameRegex.test(name)) errors.push("Jméno je neplatné.");
    if (!surname || !surnameRegex.test(surname)) errors.push("Příjmení je neplatné.");
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.push("Email je neplatný.");
    if (!phone || !phoneRegex.test(phone)) errors.push("Telefonní číslo je neplatné.");
    if (!address || !addressRegex.test(address)) errors.push("Adresa je neplatná.");
    if (!city || !cityRegex.test(city)) errors.push("Město je neplatné.");
    if (!message) errors.push("Zpráva je povinná.");


    if (errors.length > 0) {

        const alertBox = document.querySelector(".alert");
        alertBox.classList.add("alert--show");
        for (let i = 0; i < errors.length; i++) {
            alertBox.innerHTML += errors[i] + "<br>";
        }
        setTimeout(() => {
            alertBox.classList.remove("alert--show");
            alertBox.innerHTML = "";
        }, 3000);


        return false;
    }
    return true;
}