document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Collect form data
        const formData = new FormData(form);
        
        // Validate form data
        const name = formData.get('name');
        const surname = formData.get('surname');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const address = formData.get('address');
        const city = formData.get('city');
        const message = formData.get('message');
        
        if (!name || !surname || !email || !phone || !address || !city || !message) {
            alert('All fields are required.');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Please enter a valid email address. Example:email@email.email');
            return;
        }
        
        if (!validatePhone(phone)) {
            alert('Please enter a valid phone number. Example: 123456789');
            return;
        }

        if (!validateAddress(address)) {
            alert('Address must contain a house number.');
            return;
        }

        if (message.length > 255) {
            alert('Message can have a maximum of 255 characters.');
            return;
        }
        
        // Display a success message (for demonstration purposes)
        alert('Form submitted successfully!');
        
        // Optionally, send the data to a server
        fetch('/submit', {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.ok) {
                alert('Form submitted successfully!');
            } else {
                alert('Form submission failed.');
            }
        });
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    
    function validatePhone(phone) {
        const re = /^\d{9}$/;
        return re.test(String(phone));
    }

    function validateAddress(address) {
        const re = /\d+/;
        return re.test(String(address));
    }
});

document.getElementById('myForm').addEventListener('input', function(event) {
    const target = event.target;
    const validationImg = document.getElementById(target.id + 'Validation');
    
    if (target.id === 'phone') {
        if (target.value.length === 9)
        {
            validationImg.src = 'green.jfif';
        }
        else
        {
            validationImg.src = 'red.png';
        }
    }
    
    else if (target.id === 'email') {

        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (re.test(target.value)){
            validationImg.src = 'green.jfif';
        }
        else
        {
            validationImg.src = 'red.png';
        }
    }

    else if (target.id === 'address')
    {
        const re = /(?=.*\d)(?=.*[a-zA-Z]{2,})/;
        if (re.test(target.value)) {
            validationImg.src = 'green.jfif';
        }
        else
        {
            validationImg.src = 'red.png';
        }
    }

    else if(target.id === 'city')
    {
        const re = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

        if (re.test(target.value)) {
            validationImg.src = 'green.jfif';
        }
    }

    else 
    {
        if (target.checkValidity())
        {
            validationImg.src = 'green.jfif';
        }
        else
        {
            validationImg.src = 'red.png';
        }
    }
});