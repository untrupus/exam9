import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchContacts, showModal, closeModal} from "../../store/actions";
import SingleContact from "../../components/SingleContact/SingleContact";
import './ContactList.css';
import Modal from "../../components/Modal/Modal";

const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const show = useSelector(state => state.modal);
    const dispatch = useDispatch();

    const openModal = (id) => dispatch(showModal(id));
    const close = () => dispatch(closeModal());

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
                    click={() => openModal(contact[0])}
                />
            )
        });
    }

    return (
        <div>
            {show ? <Modal
                click={close}
            /> : null}
            {contactList}
        </div>
    );
};

export default ContactList;