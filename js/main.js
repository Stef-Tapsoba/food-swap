// JS FOR CONTACT US Page
function contactUs() {
    var form = document.getElementsById("contact-form");
    form.addEventListener("submit", handleSubmit);

    const submitSuccess = document.getElementById('#form-message-success')

    const handleSubmit = (e) => {
    e.preventDefault();
    submitSuccess.style.display = "block";
    };
};


// JS FOR FAQ PAGE
function faq() {
    var faq = document.getElementsByClassName("faq-page");
    var i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            this.classList.toggle("active");
            /* Toggle between hiding and showing the active panel */
            var body = this.nextElementSibling;
            if (body.style.display === "block") {
                body.style.display = "none";
            } else {
                body.style.display = "block";
            }
        });
    }
}
