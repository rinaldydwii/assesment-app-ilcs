import {
    REQUEST_GET_TERMINAL,
    SUCCESS_GET_TERMINAL,
    FAIL_GET_TERMINAL
} from "../actions/terminalAction";

const INITIAL_STATE = {
    terminals: [],
    error: ""
};

const terminalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_GET_TERMINAL:
            return {
                ...state
            }
        case SUCCESS_GET_TERMINAL:
            return {
                ...state,
                terminals: action.terminals
            }
        case FAIL_GET_TERMINAL:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
};

export default terminalReducer;
