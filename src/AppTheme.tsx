import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { theme } from "@config/theme";


interface Props {
    children: JSX.Element[] | JSX.Element;
}

export const AppTheme: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}