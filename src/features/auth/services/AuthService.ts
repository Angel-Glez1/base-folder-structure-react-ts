import authMockdate from '../../../assets/mock_data/auth/auth.mockdata';



const login = () => new Promise((resolve, _) => {
    setTimeout(() => resolve(authMockdate.token) , 2500)
})


const logout = () => new Promise((resolve, _) => {
    return resolve(0);
})


export default {
    login,
    logout
}

