import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store"
import { setToken } from "../slices/AuthSlice"
import authService from "../services/authService"





export const useAuthLogin = () => {

    const dispatch = useDispatch()
    const token = useSelector((state: RootState) => state.auth.token);

    const onLogin = () => {
        authService.login()
            .then(data => dispatch(setToken(data)))
            .catch(error => console.error(error))
    }


    const getToken = () => {
        return token;
    }


    return {
        onLogin,
        getToken,
    }
}