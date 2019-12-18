import request from './request';

export const login = (data: {token: string, provider: string}) => {
    return request({
        url: '/customers',
        method: 'post',
        data
    })
}

export const me = (token: any) => {
    return request({
        url: '/customers/me',
        method: 'get',
        headers: {
            authorization: `Bearer ${token.token}`
        }
    })
}