import {
    FETCH_CONTACTS_ERROR,
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS
} from "./actionTypes";

const initialState = {
    contacts: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CONTACTS_REQUEST:
            return {...state};
        case FETCH_CONTACTS_SUCCESS:
            return {...state, contacts: action.value};
        case FETCH_CONTACTS_ERROR:
            return {...state};
        default:
            return state;
    }
};

export default reducer;