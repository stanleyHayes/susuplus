import {AUTH_ACTION_TYPES} from "./auth-action-types";

const INITIAL_STATE = {
    authLoading: false,
    message: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case AUTH_ACTION_TYPES.VERIFY_ACCOUNT_REQUEST:
            return {
                ...state,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.VERIFY_ACCOUNT_SUCCESS:
            return {
                ...state,
                authLoading: false,
                message: action.payload
            }

        case AUTH_ACTION_TYPES.VERIFY_ACCOUNT_FAILURE:
            return {
                ...state,
                authLoading: false,
                message: action.payload
            }

        case AUTH_ACTION_TYPES.RESET_PASSWORD_REQUEST:
            return {
                ...state,
                authLoading: true
            }

        case AUTH_ACTION_TYPES.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                authLoading: false,
                message: action.payload
            }

        case AUTH_ACTION_TYPES.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                authLoading: false,
                message: action.payload
            }
        default:
            return state;
    }
}

export const selectAuth = state => state.auth;

export default authReducer;
