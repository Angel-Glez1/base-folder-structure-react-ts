


export interface IAuthService {
    login: () => Promise<unknown>,
    logout: () => Promise<unknown>
}