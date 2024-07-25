import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "@features/auth/AuthRoutes"




export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<h1>This landing Page</h1>} />
            <Route path="/auth/*" element={<AuthRoutes />} />
        </Routes>
    )
}   