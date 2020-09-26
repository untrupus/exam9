import React from 'react';
import './Modal.css';
import {useDispatch, useSelector} from "react-redux";
import axiosOrder from "../../axiosOrder";
import {closeModal, deleteContacts, fetchContacts} from "../../store/actions";
import {Link} from "react-router-dom";

const Modal = props => {
    const contact = useSelector(state => state.contacts);
    const id = useSelector(state => state.id);
    const dispatch = useDispatch();

    const del = (id) => dispatch(deleteContacts(id));

    const edit = () => dispatch(closeModal());

    const deleteContact = async (id) => {
      await axiosOrder.delete('contacts/' + id + '.json');
        del(id);
        dispatch(fetchContacts());
    };

    return (
        <>
            <div className="Backdrop" onClick={props.click}/>
            <div className='modal'>
                <img
                    className="avatar"
                    alt="avatar"
                    src={contact[id].photo}
                />
                <div className="contactInfo">
                    <h3>{contact[id].name}</h3>
                    <p>&#9990; <a href={'tel:' + contact[id].phone}>{contact[id].phone}</a></p>
                    <p>&#9993; <a href={'mailto:' + contact[id].mail}>{contact[id].mail}</a></p>
                    <button type="button"
                            className="addBtn"
                            onClick={edit}
                    >
                        <Link className="edit" to={'/' + id + '/edit'}>Edit</Link>

                    </button>
                    <button type="button"
                            className="addBtn"
                    onClick={() => deleteContact(id)}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
};

export default Modal;