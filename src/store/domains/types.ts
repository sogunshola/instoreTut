import {User, CurrentUser} from '../types';

export const LOGIN_USER = 'LOGIN_USER'

interface loginUser {
    type: typeof LOGIN_USER,
    payload:  CurrentUser,
    meta?: any
}

export type LoginActionTypes = loginUser;