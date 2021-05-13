import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTypography-root': {
            paddingTop: theme.spacing(1),
        },
        '& .MuiListItemText-root':{
            maxWidth: '45ch'
        }
    },
}));
