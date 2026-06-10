const form = document.querySelector(".form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Спасибо! Ваше сообщение отправлено.");

        form.reset();
    });
}
