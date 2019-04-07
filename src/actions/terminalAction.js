export const REQUEST_GET_TERMINAL = "REQUEST_GET_TERMINAL";
export const SUCCESS_GET_TERMINAL = "SUCCESS_GET_TERMINAL";
export const FAIL_GET_TERMINAL = "FAIL_GET_TERMINAL";
import API from '../services/constant';
import request from '../services';
import handleError from '../helpers/handleError';

function requestGetTerminal() {
    return {
        type: REQUEST_GET_TERMINAL
    }
}
function successGetTerminal(terminals) {
    return {
        type: SUCCESS_GET_TERMINAL,
        terminals
    }
}
function failGetTerminal(error) {
    return {
        type: FAIL_GET_TERMINAL,
        error
    }
}

export function getTerminal() {
    return dispatch => {
        dispatch(requestGetTerminal());
        request.get(API.M_VESSEL+"/"+API.TERMINAL)
            .then(response => dispatch(successGetTerminal(response.data.data)))
            .catch(error => dispatch(failGetTerminal(handleError(error))))
    }
}