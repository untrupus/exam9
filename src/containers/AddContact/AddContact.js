import React, {useState} from 'react';
import axiosOrder from "../../axiosOrder";
import './AddContact.css';

const AddContact = props => {
    const [value, setValue] = useState({
        name: '',
        phone: '',
        mail: '',
        photo: ''
    });

    const onChangeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;
        setValue(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const saveContact = async () => {
        await axiosOrder.post('contacts.json', value);
        props.history.push({
            pathname: '/'
        });
    };

    const clear = () => {
        const newValue = {
            name: '',
            phone: '',
            mail: '',
            photo: ''
        };
        setValue(newValue);
        props.history.push({
            pathname: '/'
        });
    };

    return (
        <div>
            <h3>Add new contact</h3>
            <div>
                <p className="inputDescription">Name:
                    <input
                        placeholder="enter your name"
                        name="name"
                        className="field"
                        value={value.name}
                        onChange={onChangeHandler}
                    /></p>
                <p className="inputDescription">Phone number:
                    <input
                        placeholder="phone number"
                        name="phone"
                        className="field"
                        value={value.phone}
                        onChange={onChangeHandler}
                    /></p>
                <p className="inputDescription">E-mail:
                    <input
                        placeholder="mail"
                        name="mail"
                        className="field"
                        value={value.mail}
                        onChange={onChangeHandler}
                    /></p>
                <p className="inputDescription">Photo:
                    <input
                        placeholder="add photo link"
                        name="photo"
                        className="field"
                        value={value.photo}
                        onChange={onChangeHandler}
                    /></p>
                <p className="inputDescription">Photo preview</p>
            </div>

            <div className="buttons">
                <button type="button"
                        onClick={saveContact}
                        className="btn">
                    Save
                </button>
                <button type="button"
                        onClick={clear}
                        className="btn">
                    Back to Contacts
                </button>
            </div>

        </div>
    );
};

export default AddContact;