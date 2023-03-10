// JS FOR CONTACT US Page
contactUs =()=> {
    var form = document.getElementsByTagName("form")[0];
    form.addEventListener("submit", handleSubmit);

    const submitSuccess = document.getElementById('#form-message-success')

    const handleSubmit = (e) => {
    e.preventDefault();
    submitSuccess.style.display = "block";
    };
};


// JS FOR FAQ PAGE
faq =()=> {
    var faq = document.getElementsByClassName("faq-page");
    var i;
    for (i = 0; i < faq.length; i++) {
        faq[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
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
