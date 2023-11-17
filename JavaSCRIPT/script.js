const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const numberInput = document.querySelector('#number');
const emailInput = document.querySelector('#email');
const confirmEmailInput = document.querySelector('#confirm-email');
const messageInput = document.querySelector('#message');
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
const radioInputs = document.querySelectorAll('input[type="radio"]');
const selectInput = document.querySelector('#select');
const submitButton = document.querySelector('#submit-button');
const responseDiv = document.querySelector('#response');

submitButton.addEventListener('click', (event) => {
	event.preventDefault();

	if (nameInput.value.trim() === '') {
		responseDiv.innerHTML = 'Please enter your name.';
		return;
	}

	if (!/^([0-9]{3})-([0-9]{7})$/.test(numberInput.value)) {
		responseDiv.innerHTML = 'Please enter a valid phone number in the format XXX-XXXXXXX.';
		return;
	}


	if (emailInput.value.trim() === '') {
		responseDiv.innerHTML = 'Please enter your email.';
		return;
	}


	if (confirmEmailInput.value.trim() === '') {
		responseDiv.innerHTML = 'Please confirm your email.';
		return;
	}

	if (emailInput.value !== confirmEmailInput.value) {
		responseDiv.innerHTML = 'Please make sure your email confirmation matches your email.';
		return;
	}

	if (messageInput.value.trim() === '') {
		responseDiv.innerHTML = 'Please enter a message.';
		return;
	}
    let isCheckboxChecked = false;
    for (const checkbox of checkboxInputs) {
        if (checkbox.checked) {
            isCheckboxChecked = true;
            break;
        }
    }

    if (!isCheckboxChecked) {
        responseDiv.innerHTML = 'Please select at least one checkbox option.';
        return;
    }
	

	// Get form data
	const formData = new FormData(form);
	const data = {};

	for (const [key, value] of formData.entries()) {
		data[key] = value;
	}

	// Show form data on page
	let formOutput = '<h2>Form Data:</h2>';
	formOutput += `<p>Name: ${data.name}</p>`;
	formOutput += `<p>Phone Number: ${data.number}</p>`;
	formOutput += `<p>Email: ${data.email}</p>`;
	formOutput += `<p>Message: ${data.message}</p>`;
	let checkedValues = '';
    for (const checkbox of checkboxInputs) {
        if (checkbox.checked) {
            checkedValues += `${checkbox.value}, `;
        }
    }
    checkedValues = checkedValues.slice(0, -2);
    formOutput += `<p>Subscribe: ${checkedValues}</p>`;
	for (const radio of radioInputs) {
		if (radio.checked) {
			formOutput += `<p>How did you hear about us: ${radio.value}</p>`;
			break;
		}
	}
	formOutput += `<p>Reason for contact: ${data.value}</p>`;
	responseDiv.innerHTML = formOutput;
});
