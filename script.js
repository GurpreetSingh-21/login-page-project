// Container and Sign In Button
const container = document.querySelector(".container");
const signInBtn = document.querySelector(".blue-bg button");

if (signInBtn) {
    signInBtn.addEventListener("click", () => {
        container.classList.toggle("change");
    });
}

// Form Submission
const loginForm = document.querySelector(".login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevents the default form submission
        
        const emailField = document.querySelector('input[type="email"]');
        const passwordField = document.querySelector('input[type="password"]');
        const email = emailField ? emailField.value.trim() : '';
        const password = passwordField ? passwordField.value.trim() : '';

        if (!email || !password) {
            alert("Please fill in both fields");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address");
        } else {
            alert("Login successful!");
        }
    });
}

// Password Visibility Toggle
const togglePasswordBtn = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');

if (togglePasswordBtn && passwordField) {
    togglePasswordBtn.addEventListener('click', function () {
        const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
        passwordField.setAttribute("type", type);
        this.classList.toggle("fa-eye-slash");
    });
}

// Remember Me Checkbox
const rememberMe = document.querySelector("#remember");

if (rememberMe) {
    rememberMe.addEventListener("change", function () {
        if (this.checked) {
            console.log("Remember me checked");
        } else {
            console.log("Remember me unchecked");
        }
    });
}
