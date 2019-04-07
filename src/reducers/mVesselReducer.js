import {
    REQUEST_GET_M_VESSEL,
    SUCCESS_GET_M_VESSEL,
    FAIL_GET_M_VESSEL
} from "../actions/mVesselAction";

const INITIAL_STATE = {
    terminal: "",
    mVessels: [],
    loading: false,
    error: ""
};

const mVesselReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REQUEST_GET_M_VESSEL:
            return {
                ...state,
                loading: true,
                terminal: action.terminal
            }
        case SUCCESS_GET_M_VESSEL:
            return {
                ...state,
                loading: false,
                mVessels: action.mVessels
            }
        case FAIL_GET_M_VESSEL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
};

export default mVesselReducer;
