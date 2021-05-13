import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            width: '40ch',
            padding: theme.spacing(2),
        },
    },
}));
