import { TextField } from '@material-ui/core';
import { useState } from 'react';
import useStyles from './styles';

export default function CreateTodo({ handleSubmit }) {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        handleSubmit(text)
        setText('')
    }

    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)}
        >
            <TextField
                placeholder="Create a new todo"
                value={text}
                autoFocus={true}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    );
}
