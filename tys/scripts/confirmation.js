// Grab URL parameters
const urlParams = new URLSearchParams(window.location.search);
const showInfo = document.querySelector('#results');

function getParamValue(paramName) {
    return urlParams.get(paramName) || "Not provided";
}

// Display the form submission info
showInfo.innerHTML = `
    <p><strong>Thank you, ${getParamValue('name')}! Your message has been received.</strong></p>
    <p><strong>Email:</strong> ${getParamValue('email')}</p>
    <p><strong>Phone:</strong> ${getParamValue('phone')}</p>
    <p><strong>Subject:</strong> ${getParamValue('subject')}</p>
    <p><strong>Message:</strong> ${getParamValue('message')}</p>

    <p>Our team will get back to you within 1-2 business days. We appreciate you reaching out!</p>
`;
