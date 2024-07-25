


export interface IAuthService {
    login: () => Promise<unknown>,
    logout: () => Promise<unknown>
}



export interface IAuthState {
    token: string | null;
}