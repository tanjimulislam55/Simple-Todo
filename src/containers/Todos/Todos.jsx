/* eslint-disable no-unused-vars */
import { Button, ButtonGroup, Container, CssBaseline } from '@material-ui/core';
import { useEffect, useState } from 'react';
import CreateTodo from '../../components/CreateTodo/CreateTodo';
import TodoList from '../../components/TodoList/TodoList';
import FilterTodo from '../../components/FilterTodo/FilterTodo'
import todoList from '../../data/db.json'
import useStyles from './styles'

export default function Todos() {
    const classes = useStyles()
    const tasks = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [...todoList.todos]
    const [todos, setTodos] = useState(tasks);
    const [id, setId] = useState(todos.length+100)
    const [selectedFilter, setSelectedFilter] = useState('all')

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleSubmit = (text) => {
        setTodos((todos) => [...todos, {
            "id": id,
            "text": text,
            "checked": false
        }])
        setId((id) => id+1)
    };

    const updateTodo = (id) => {
        const updatedTodos = [...todos]
        const editTodo = updatedTodos.find((todo) => todo.id === id)
        if (editTodo) editTodo.checked = !editTodo.checked
        setTodos([...updatedTodos])
    }

    const deleteTodo = (id) => setTodos([...todos].filter((todo) => todo.id !== id))

    const clearTodo = () => setTodos([...todos].filter((todo) => !todo.checked))
   
    const updateFilter = (strs) => setSelectedFilter(strs)

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm" fixed >
                <CreateTodo handleSubmit={handleSubmit} />
                <FilterTodo updateFilter={updateFilter} />
                <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} selectedFilter={selectedFilter} />
                <Button className={classes.root} onClick={clearTodo} size="medium" color="secondary">clear completed</Button>
            </Container>
        </div>
    );
}
