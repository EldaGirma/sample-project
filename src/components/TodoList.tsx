import { FC, useState, ChangeEvent } from 'react'
import Todo from './Todo'
import { Typography, Grid, Button, Container, Input, Box } from '@mui/material'
import { ITask } from '../Interfaces'
import TagFacesIcon from '@mui/icons-material/TagFaces';



const TodoList = () => {
    const [task, setTask] = useState<string>("")
    const [todoList, setTodoList] = useState<ITask[]>([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value)
    }
    const addTask = (): void => {
        const newTask = {
            title: task,
            isCompleted: false

        }
        setTodoList([...todoList, newTask])


    }
    const completeTask = (titleToComplete: string): void => {
        setTodoList(todoList.map((task) => {
            if (task.title === titleToComplete) {
                task.isCompleted = !task.isCompleted
            }
            return task
        }))
    }



    const delTask = (titleToDelete: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.title !== titleToDelete
        }))
    }

    return (
        <Grid container>
            <Grid item xs={5}>
                <Container >
                    <Box sx={{ marginTop: '10px', display: 'flex', gap: '5px' }}>
                        <TagFacesIcon />
                        <Typography> Happy day</Typography>
                    </Box>
                    <Box sx={{
                        marginTop: '50px',
                        marginRight: '50px',
                        textAlign: 'end'
                    }}>

                        {/* //onSubmit={handleSubmit} */}
                        {/* <form  autoComplete="off">
                <FormControl fullWidth={true}> */}
                        <Input placeholder="new task " required={true}
                            style={{ border: '1px solid lightgray', width: '320px' }}
                            onChange={handleChange}
                            value={task}
                        // onChange={(e) => setText(e.target.value)} 

                        />

                        {/* </FormControl> */}
                        <Button variant='contained' color="primary" type="submit"
                            style={{
                                marginTop: 15,
                                width: '120px',
                                textAlign: 'end',

                            }}
                            onClick={addTask}
                        >Add task</Button>
                        {/* </form> */}
                    </Box>
                </Container>
            </Grid>
            <div style={{ width: '650px', marginTop: '10px' }}>
                <Typography style={{ marginLeft: 20 }}>My tasks</Typography>
                <div style={{ border: "1px solid lightgray", height: '450Px', overflowY: 'auto', marginLeft: '4px' }}>
                    <div>{
                        todoList.map((task: ITask, key: number) => {
                            return <Todo key={key} task={task} delTask={delTask} completeTask={completeTask} />
                        })}</div>
                </div>
            </div>
        </Grid>
    )
}

export default TodoList