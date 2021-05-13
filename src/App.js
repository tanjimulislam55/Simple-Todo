import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Josefin Sans',
        fontWeightLight: 400,
        fontWeightRegular: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    },
});
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Aux>
                <Layout />
            </Aux>
        </ThemeProvider>
    );
}

export default App;
