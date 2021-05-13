import { Paper, Tab, Tabs } from "@material-ui/core";
import { useState } from "react";
import useStyles from './styles'

export default function FilterTodo({ updateFilter }) {
    const classes = useStyles()
    const [value, setValue] = useState(0)

    return (
        <Paper square className={classes.root}>
            <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={(e, newValue) => setValue(newValue)}>
                <Tab label="All" onClick={() => updateFilter('all')} />
                <Tab label="Active" onClick={() => updateFilter('active')} />
                <Tab label="Completed" onClick={() => updateFilter('completed')} />
            </Tabs>
        </Paper>
    )
}