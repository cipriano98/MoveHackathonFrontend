import React from 'react';
import './styles.css';

/* function whats(){
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    const accountSid = '';
    const authToken = '';
    const client = require('twilio')(accountSid, authToken);

    client.messages
        .create({
            from: 'whatsapp:+5551993535416',
            body: 'Hello, there!',
            to: 'whatsapp:+5551995645450'
        })
        .then(message => console.log(message.sid));
}
 */
function PersonalItem({ personal }) {
    return (
            <li className="personal-item">
                <header>
                    <div className="img-personal" alt={personal.cref}></div>
                    <div className="user-info">
                        <strong>{personal.name}</strong>
                        <span>CREF: {personal.cref}</span><br/>
                        <span>Skills: {personal.skills.join(', ')}</span>
                    </div>
                </header>
                <p>{personal.bio}</p>
                <a href={`https://whatsapp.com`}>WhatsApp</a>
            </li>
    );
}


export default PersonalItem;