import { Checkbox, Divider, IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import BackspaceIcon from '@material-ui/icons/Backspace';
import useStyles from './styles'

export default function TodoListItem({todo, deleteTodo, updateTodo}) {
    const classes = useStyles()
    return (
        <>
            <ListItem className={classes.root} role={undefined} dense>
                <ListItemIcon>
                    <Checkbox edge="start" checked={todo.checked} tabIndex={-1} disableRipple onChange={() => updateTodo(todo.id)} />
                    <ListItemText primary={todo.text} />
                    <ListItemSecondaryAction >
                        <IconButton edge="end" onClick={() => deleteTodo(todo.id)}>
                            <BackspaceIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItemIcon>
            </ListItem>
            <Divider />
        </>
    )
}