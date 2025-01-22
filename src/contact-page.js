export const contactPage = () => {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('class', 'contact-container');

    contact.appendChild(contactContainer);

    // Contact Info
    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('class', 'contact-info');

    contactContainer.appendChild(contactInfo);

    const infoH2 = document.createElement('h2');
    infoH2.innerText = 'Contact Us';
    
    const infoP = document.createElement('p');
    infoP.innerText = 'We would love to hear from you! Reach out to us via the contact form below or any of our communication channels:';

    const infoUl = document.createElement('ul');
    const infoLi1 = createLi('Email:', ' support@sooreyemen.com');
    const infoLi2 = createLi('Phone:', ' +963-424-9871')
    const infoLi3 = createLi('Address', " Abood's street, Al Mukdad city, India")

    infoUl.appendChild(infoLi1);
    infoUl.appendChild(infoLi2);
    infoUl.appendChild(infoLi3);

    contactInfo.appendChild(infoH2);
    contactInfo.appendChild(infoP);
    contactInfo.appendChild(infoUl);

    contentDiv.appendChild(contact);

    // Contact Form
    const contactForm = document.createElement('div');
    contactForm.setAttribute('class', 'contact-form');

    const formH3 = document.createElement('h3');
    formH3.innerText = 'Send Us a Message';

    const formBox = document.createElement('form');

    const label1 = document.createElement('label');
    label1.setAttribute('for', 'name')
    label1.innerText = 'Your Name:'

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', 'name');
    input1.setAttribute('name', 'name');
    input1.setAttribute('required', '')

    const label2 = document.createElement('label');
    label1.setAttribute('for', 'email')
    label1.innerText = 'Your Email:'

    const input2 = document.createElement('input');
    input1.setAttribute('type', 'email');
    input1.setAttribute('id', 'email');
    input1.setAttribute('name', 'email');
    input1.setAttribute('required', '')

    const label3 = document.createElement('label');
    label1.setAttribute('for', 'message')
    label1.innerText = 'Your Message:'

    const input3 = document.createElement('textarea');
    input1.setAttribute('id', 'message');
    input1.setAttribute('name', 'message');
    input1.setAttribute('required', '')

    const button = document.createElement('button');
    button.setAttribute('type', 'submit')
    button.innerText = 'Send Message';

    formBox.appendChild(label1);
    formBox.appendChild(input1);

    formBox.appendChild(label2);
    formBox.appendChild(input2);
    
    formBox.appendChild(label3);
    formBox.appendChild(input3);

    formBox.appendChild(button);

    contactForm.appendChild(formH3);
    contactForm.appendChild(formBox)

    contactContainer.appendChild(contactForm);
}




const createLi = (label, text) => {
    const li = document.createElement('li');
    const strong = document.createElement('strong');
    strong.innerText = label;
    li.appendChild(strong);
    li.innerHTML += text;
    return li;
}