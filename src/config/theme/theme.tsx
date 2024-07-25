import { createTheme } from '@mui/material/styles';
import { colorManager } from './color_manager';

// A custom theme for this app
export const theme = createTheme({
  palette: {
    primary: {
      main: colorManager.primary,
    },
    secondary: {
      main: colorManager.secondary,
    },
    error: {
      main: colorManager.error,
    },
  },
});

