export const REQUEST_GET_M_VESSEL = "REQUEST_GET_M_VESSEL";
export const SUCCESS_GET_M_VESSEL = "SUCCESS_GET_M_VESSEL";
export const FAIL_GET_M_VESSEL = "FAIL_GET_M_VESSEL";
import API from '../services/constant';
import request from '../services';
import handleError from '../helpers/handleError';

function requestGetMVessel(terminal) {
    return {
        type: REQUEST_GET_M_VESSEL,
        terminal
    }
}
function successGetMVessel(mVessels) {
    return {
        type: SUCCESS_GET_M_VESSEL,
        mVessels
    }
}
function failGetMVessel(error) {
    return {
        type: FAIL_GET_M_VESSEL,
        error
    }
}

export function getMVesselByTerminal(terminal) {
    return dispatch => {
        dispatch(requestGetMVessel(terminal));
        request.get(API.M_VESSEL+"/"+API.TERMINAL+"/"+terminal)
            .then(response => dispatch(successGetMVessel(response.data.data)))
            .catch(error => dispatch(failGetMVessel(handleError(error))))
    }
}