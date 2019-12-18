export interface User {
    _id?: number;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl?: any;
}

export interface CurrentUser {
    authToken: string;
    userInfo: User
}
