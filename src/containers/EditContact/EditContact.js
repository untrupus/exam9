import React, {useState} from 'react';
import axiosOrder from "../../axiosOrder";

const EditContact = props => {
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
        if (value.name !== '' && value.phone !== '' && value.mail !== '' && value.photo !== '') {
            await axiosOrder.put('contacts.json', value);
            props.history.push({
                pathname: '/'
            });
        } else {
            alert("Fill in all fields");
        }
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

    let previewImg;
    if (value.photo === '') {
        previewImg = 'https://annam-finefood.com/wp-content/uploads/2016/09/no-avatar.png';
    } else {
        previewImg = value.photo;
    }

    return (
        <div className="add">
            <h3>Edit contact</h3>
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
                <p className="inputDescription">Photo preview:</p>
                <img className="preview"
                     src={previewImg}
                     alt="preview"
                />
            </div>

            <div className="buttons">
                <button type="button"
                        onClick={saveContact}
                        className="addBtn">
                    Save
                </button>
                <button type="button"
                        onClick={clear}
                        className="addBtn">
                    Back to Contacts
                </button>
            </div>

        </div>
    );
};

export default EditContact;