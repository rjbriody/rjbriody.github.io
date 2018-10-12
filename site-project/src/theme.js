
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
    typography: {
        display4: {
            fontWeight: 200,
        },
        display3: {
            fontWeight: 200,
        },
        headline: {
            fontWeight: 200
        }
    }
});

export default theme;
