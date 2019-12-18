import { LOGIN_USER, LoginActionTypes } from './types';
import {User, CurrentUser} from '../types';

const initialUserState:  CurrentUser = {
    authToken: '',
    userInfo: {
        email: '',
        firstName: '',
        lastName: '',
        _id: 0,
        avatarUrl: null
    }
}

export function userReducer (
    state = initialUserState,
    action: LoginActionTypes
): CurrentUser {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}
