import List from '@material-ui/core/List';
import TodoListItem from '../TodoListItem/TodoListItem';
import useStyles from './styles';

export default function TodoList({ todos, deleteTodo, updateTodo, selectedFilter }) {
    const classes = useStyles();

    const filteration = (selected) => {
        switch(selected) {
            case 'all':
                return todos.map(({id, text, checked}) => {
                    return (<TodoListItem  key={id} todo={{id: id, text: text, checked: checked}} deleteTodo={deleteTodo} updateTodo={updateTodo} />)
                })
            case 'active':
                return todos.map(({id, text, checked}) => {
                    if (checked) return ''
                    return (<TodoListItem  key={id} todo={{id: id, text: text, checked: checked}} deleteTodo={deleteTodo} updateTodo={updateTodo} />)
                }) 
            case 'completed':
                return todos.map(({id, text, checked}) => {
                    if (!checked) return ''
                    return (<TodoListItem  key={id} todo={{id: id, text: text, checked: checked}} deleteTodo={deleteTodo} updateTodo={updateTodo} />)
                })
            default:
                throw new Error()
    }}
    return (
        <List className={classes.root}>
            {filteration(selectedFilter)}
        </List>
    );
}
