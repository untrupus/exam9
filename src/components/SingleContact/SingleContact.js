import React from 'react';
import './SingleContact.css';

const SingleContact = props => {
    return (
        <div className="singleContact"
             onClick={props.click}>
            <img src={props.src}
                 className="contactImg"
                 alt="contact"
            />
            <h2>{props.name}</h2>
        </div>
    );
};

export default SingleContact;