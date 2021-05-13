import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1),
        position: 'absolute',
        right: '10px',
        maxWidth: '100%',
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: "39ch",
        }
    },
}))