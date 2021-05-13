import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 500,
        marginBottom: theme.spacing(0.5),
        '& .MuiTab-root': {
            fontSize: '0.75rem'
        }
    },
}));
