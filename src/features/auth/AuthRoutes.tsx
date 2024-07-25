import { Route, Routes } from "react-router-dom"
import { PageNotFound } from "../../shared/components/PageNotFound"
import { AuthLoginPage } from "./pages/AuthLoginPage"
import { AuthRegisterPage } from "./pages/AuthRegisterPage"





export const AuthRoutes = () => {

    return (
        <Routes>
            <Route path='/login' element={<AuthLoginPage />} />
            <Route path='/registro' element={<AuthRegisterPage />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}
