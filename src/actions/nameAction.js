export const REQUEST_GET_NAME = "REQUEST_GET_NAME";
export const SUCCESS_GET_NAME = "SUCCESS_GET_NAME";
export const FAIL_GET_NAME = "FAIL_GET_NAME";
import API from '../services/constant';
import request from '../services';
import handleError from '../helpers/handleError';

function requestGetName() {
    return {
        type: REQUEST_GET_NAME
    }
}
function successGetName(name) {
    return {
        type: SUCCESS_GET_NAME,
        name
    }
}
function failGetName(error) {
    return {
        type: FAIL_GET_NAME,
        error
    }
}

export function getName() {
    return dispatch => {
        dispatch(requestGetName());
        request.get(API.NAME)
            .then(response => dispatch(successGetName(response.data.data.name)))
            .catch(error => dispatch(failGetName(handleError(error))))
    }
}