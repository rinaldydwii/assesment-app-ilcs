import {
    REQUEST_GET_M_VESSEL,
    SUCCESS_GET_M_VESSEL,
    FAIL_GET_M_VESSEL,
    REQUEST_CREATE_M_VESSEL,
    SUCCESS_CREATE_M_VESSEL,
    FAIL_CREATE_M_VESSEL
} from "../actions/mVesselAction";

const INITIAL_STATE = {
    terminal: "",
    mVessels: [],
    loading: false,
    loadingCreate: false,
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
        case REQUEST_CREATE_M_VESSEL:
            return {
                ...state,
                loadingCreate: true,
            }
        case SUCCESS_CREATE_M_VESSEL:
            let mVessels = state.mVessels
            return {
                ...state,
                loadingCreate: false,
                mVessels: mVessels.concat([action.mVessel])
            }
        case FAIL_CREATE_M_VESSEL:
            return {
                ...state,
                loadingCreate: false,
                error: action.error
            }
        default:
            return state
    }
};

export default mVesselReducer;
