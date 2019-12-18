import { LOGIN_USER, LoginActionTypes } from './types';
import {CurrentUser} from '../types';
import { login, me } from '../../api/api';


// State update
export function loginUser(token: string, provider: string): LoginActionTypes {
    var d = {
        token,
        provider
    }
    login(d).then((response: any) => {
        me(response).then((res: any): LoginActionTypes => {
            var data: CurrentUser = {
                authToken: response.token,
                userInfo: {
                    email: res.email,
                    firstName: res.firstName,
                    lastName: res.lastName,
                    _id: res._id,
                    avatarUrl: res.avatarUrl
                }
            }
            return {
                type: LOGIN_USER,
                payload: data
            }
        })
    }).catch((err) => console.log(err));
    var data: CurrentUser = {
        authToken: 'sdnljksnd',
    userInfo: {
        email: 'dfaf',
        firstName: 'kmnwlek',
        lastName: '',
        _id: 0,
        avatarUrl: null
    }
    }
    console.log(data);
    return {
        type: LOGIN_USER,
        payload: data
    }
}

export function getUser(user: CurrentUser): LoginActionTypes {
    return {
        type: LOGIN_USER,
        payload: user,
        /* meta: {
            offline: {
                effect: { url: 'https://conduit.productionready.io/api/articles', method: 'GET' },
                commit: { type: GET_ARTICLES, meta: articles },
                rollback: { type: GET_ARTICLES, meta: articles  }
            }
        } */
    }
}