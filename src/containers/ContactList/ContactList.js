import React from 'react';
import SingleContact from "../../components/SingleContact/SingleContact";
import './ContactList.css';

const ContactList = () => {
    return (
        <div>
            <SingleContact
                src="https://www.androidpolice.com/wp-content/themes/ap2/ap_resize/ap_resize.php?src=https%3A%2F%2Fwww.androidpolice.com%2Fwp-content%2Fuploads%2F2019%2F03%2Fwhatsapp-hero.png&w=728"
                name='Test Name'
            />
        </div>
    );
};

export default ContactList;