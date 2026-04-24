document.querySelector(".login-form").addEventListener('submit', function (event) {
    event.preventDefault();

    const email = this.elemants.email.trim();
    const password = this.elemants.password.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    };
    const formData = {
        email,
        password,
    };
    console.log(formData);
    this.reset();
    
});

