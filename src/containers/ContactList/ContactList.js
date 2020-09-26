import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchContacts} from "../../store/actions";
import SingleContact from "../../components/SingleContact/SingleContact";
import './ContactList.css';

const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    let contactList;
    if (contacts === null) {
        contactList = (
            <h3>Add contacts...</h3>
        );
    } else {
        contactList = Object.entries(contacts).map(contact => {
            return (
                <SingleContact
                    key={contact[0]}
                    name={contact[1].name}
                    src={contact[1].photo}
                />
            )
        });
    }

    return (
        <div>
            {contactList}
        </div>
    );
};

export default ContactList;