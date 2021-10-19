import {AUTH_ACTION_TYPES} from "./auth-action-types";
import axios from "axios";
import {CONSTANTS} from "../../constants/constants";

const verifyAccountRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_REQUEST
    }
}

const verifyAccountSuccess = message => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_SUCCESS,
        payload: message
    }
}

const verifyAccountFailure = message => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_FAILURE,
        payload: message
    }
}

export const verifyAccount = (otp, token, history) => {
    return async dispatch => {
        dispatch(verifyAccountRequest());
        try {
            const {message} = await axios({
                method: 'PUT',
                url: `${CONSTANTS.API_URL}/auth/verify/${token}`,
                data: {otp}
            });
            dispatch(verifyAccountSuccess(message));
            history.push('/auth/verification/success');
        }catch (e) {
            const {message} = e.response.data;
            dispatch(verifyAccountFailure(message));
        }
    }
}


const resetPasswordRequest = () => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_REQUEST
    }
}

const resetPasswordSuccess = message => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_SUCCESS,
        payload: message
    }
}

const resetPasswordFailure = message => {
    return {
        type: AUTH_ACTION_TYPES.VERIFY_ACCOUNT_FAILURE,
        payload: message
    }
}

export const resetPassword = (password, token, history) => {
    return async dispatch => {
        dispatch(resetPasswordRequest());
        try {
            const {message} = await axios({
                url: `${CONSTANTS.API_URL}/auth/reset-password/${token}`,
                method: 'PUT',
                data: {password}
            });
            dispatch(resetPasswordSuccess(message));
            history.push('/auth/password-reset/success');
        }catch (e) {
            const {message} = e.response.data;
            dispatch(resetPasswordFailure(message));
        }
    }
}
