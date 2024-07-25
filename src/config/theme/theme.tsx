import { createTheme } from '@mui/material/styles';
import { colorManager } from './color_manager';

// A custom theme for this app
const theme = createTheme({
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

export default theme;