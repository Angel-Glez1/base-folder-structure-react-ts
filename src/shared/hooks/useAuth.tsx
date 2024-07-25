import { useSelector } from "react-redux"
import { RootState } from '../../store';


interface IUseAuth {
    token: string
}



export const useAuth = (): IUseAuth => {

    const token = useSelector((state: RootState) => state.auth.token) ?? '';


    return {
        token
    }
}