import {
    REQUEST_GET_NAME,
    SUCCESS_GET_NAME,
    FAIL_GET_NAME
} from "../actions/nameAction";

const INITIAL_STATE = {
    name: "",
    error: ""
};

const nameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_GET_NAME:
            return {
                ...state
            }
        case SUCCESS_GET_NAME:
            return {
                ...state,
                name: action.name
            }
        case FAIL_GET_NAME:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
};

export default nameReducer;
