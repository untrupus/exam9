import {
    FETCH_CONTACTS_ERROR,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS
} from "./actionTypes";

import axiosOrder from "../axiosOrder";

const fetchContactsRequest = () => {
    return {type: FETCH_CONTACTS_REQUEST};
};
const fetchContactsSuccess = value => {
    return {type: FETCH_CONTACTS_SUCCESS, value};
};
const fetchContactsError = error => {
    return {type: FETCH_CONTACTS_ERROR, error};
};

export const fetchContacts = () => {
    return async dispatch => {
        dispatch(fetchContactsRequest());
        try {
            const response = await axiosOrder.get("contacts.json");
            dispatch(fetchContactsSuccess(response.data));
        } catch (e) {
            dispatch(fetchContactsError(e));
        }
    };
};