import { FC } from 'react'
import { Card, CardContent, Typography, IconButton, Grid, Paper, Box, Button } from '@mui/material';
import { Delete } from '@mui/icons-material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { ITask } from '../Interfaces';

interface Props {
    task: ITask;
    completeTask(titleToComplete: string): void;
    delTask(titleToDelete: string): void;
}

const Todo = ({ task, completeTask, delTask }: Props) => {
    const todoStyle = task.isCompleted ? { textDecoration: 'line-through' } : { textDecoration: 'none' }
    return (
        <Grid item >
            <Paper style={{ overflow: 'auto' }} square ><Box
                // put the items side to side
                sx={{
                    display: "flex",
                    marginLeft: 2,
                    paddingtop: -7,
                    border: '1px solid lightgray'

                }}
            >
                <Card style={{
                    //    border:'1px solid red',
                    height: '50px',
                    width: '600px'
                }} elevation={0}>
                    <CardContent>

                        <Typography variant='h5' component="h3"
                            style={todoStyle}


                        >

                            <IconButton onClick={() => { completeTask(task.title); }}>
                                {task.isCompleted ?
                                    <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />
                                }  </IconButton>


                            {task.title}
                            <IconButton style={{ float: 'right' }} onClick={() => { delTask(task.title); }}>
                                <Delete style={{ color: 'red' }} />
                            </IconButton>
                        </Typography>

                    </CardContent>

                </Card>
            </Box>
            </Paper>
        </Grid>
    )
}

export default Todo
