import { IAuthService } from "../interfaces/AuthService.interface";






export const AuthService = (): IAuthService => {

    const login = () => new Promise((resolve, _) => {
        return resolve(1);
    })


    const logout = () => new Promise((resolve, _) => {
        return resolve(0);
    })
    


    return {
        login,
        logout
    }
}