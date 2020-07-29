import React from 'react';

import './Contact.css'

const Contact = ({ show }) => {
    let contactClasses = 'contact';

    if (show) {
        contactClasses = 'contact open';
    }

    let nameClasses = 'contact-input';
    let emailClasses = 'contact-input';
    let messageClasses = 'contact-input textarea';

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');

    const verifyRequest = () => {
        if (name === '') {
            nameClasses = 'contact-input error';
            return false;
        }

        if (email === '') {
            emailClasses = 'contact-input error';
            return false;
        }

        if (message === '') {
            messageClasses = 'contact-input textarea error'
            return false;
        }

        return true;
    }

    const verifyResponse = (data) => {
        if (data.status === 1) {
            return true;
        }

        return false;
    }

    const sendMessage = () => {
        if (verifyRequest()) {
            fetch('http://www.reezanvisram.com/api/message/send', {
                method: "POST",
                headers: new Headers({
                    "Accept": "application/json",
                    "Content-type": "application/json"
                }),
    
                body: JSON.stringify(
                    {name: name, email: email, message: message}
                )
            }).then(response => response.json())
              .then(data => {
                if (verifyResponse(data)) {
                    console.log('Success!');
                } else {
                    console.log(data);
                } 
            });
        }
        
    }

    return ( 
        <div className={contactClasses}>
            <div className="contact-header">
                <h1>Contact Me</h1>
            </div>

            <div className="contact-form">
                <input type="text" placeholder="Name" className={nameClasses} onChange={event => setName(event.target.value)} />
                <input type="text" placeholder="Email" className={emailClasses} onChange={event => setEmail(event.target.value)} />
                <textarea rows="16" placeholder="Message Content" className={messageClasses} onChange={event => setMessage(event.target.value)}/>
                <button className="contact-form-submit" onClick={sendMessage}>Submit</button>
            </div>
        </div>
    )
}

export default Contact;