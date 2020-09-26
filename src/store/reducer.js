import {
    FETCH_CONTACTS_ERROR,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    SHOW_MODAL,
    CLOSE_MODAL, DELETE_CONTACT,
} from "./actionTypes";

const initialState = {
    contacts: '',
    error: null,
    modal: false,
    id: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_REQUEST:
            return {...state};
        case FETCH_CONTACTS_SUCCESS:
            return {...state, contacts: action.value};
        case FETCH_CONTACTS_ERROR:
            return {...state, error: action.value};
        case SHOW_MODAL:
            return {...state, modal: true, id: action.id};
        case CLOSE_MODAL:
            return {...state, modal: false};
        case DELETE_CONTACT:
            return {...state, modal: false};
        default:
            return state;
    }
};

export default reducer;