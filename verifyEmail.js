/* function that adds a border to the form, means user should use that */

function seeEmailForm() {
    let email_form = document.getElementById("email-verification-form");
    email_form.style.border = "2px solid #53BDF6";
    window.setTimeout(hideEmailForm, 3000); // setting timeout for removing border
}

/* function that saves verification data submitted through form */

function saveVerification() {
    let email_verification = document.getElementById("verify-email-request");
    let email_form = document.getElementById("email-verification-form");
    sessionStorage.setItem("email-verify", email_verification.value);
    email_form.reset();
}

/* function to create email link */

function revealEmail() {
    let email_form = document.getElementById("email-verification-form");
    let email_link = document.createElement("a");
    let paragraph = document.getElementById("email-append"); // this is the <p> parentElement
    let verification_number = sessionStorage.getItem("email-verify");
    if (verification_number === '4') {
        email_form.style.display = "none";
        email_link.id = 'email-link';
        email_link.classList.add("light-link");
        email_link.setAttribute("onclick", "openMailer(\"bWFpbHRvOm0lNjFpbCU0MHNwJTY5bmRsZSUyRGFkdmVudHVyZSUyRWMlNkZt\")"); // base 64 encoding of mailto link
        email_link.innerHTML = "Email: Click Here";
        paragraph.appendChild(email_link); // appends to the end of <p> parentElement
        console.log("Email link appeared");
        alert("Click the email link before it disappears!");
        window.setTimeout(removeEmail, 5000); // setting timeout for removing email link
    }
    else { // give a message if user inputs the wrong verification code
        alert("Invalid verification code!");
        console.log("Email link did not appear");
    }
}

/* function that fills in href attribute of email link upon clicking */

function openMailer(code) {
    let email_link = document.getElementById("email-link");
    let email_decoder = atob(code); // decode base64 encoding: includes hex characters for further obfuscation
    email_link.setAttribute("href", email_decoder);
}

/* function that removes border from form */

function hideEmailForm() {
    let email_form = document.getElementById("email-verification-form");
    email_form.style.border = "none";
}

/* function that removes the mailto email link and re-displays the form */

function removeEmail() {
    let email_link = document.getElementById("email-link");
    let email_form = document.getElementById("email-verification-form");
    if (email_link != null) { // perform function ONLY if the email link is present!
        email_link.parentElement.removeChild(email_link);
        email_form.style.display = "block";
    }
}