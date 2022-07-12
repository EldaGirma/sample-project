import { FC,useState,ChangeEvent } from 'react'
import { Typography,FormControl, Container, TextField,Input, Button,Box ,Grid} from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { ITask } from "../Interfaces";

const TodoForm :FC = () => {
    const [task,setTask] = useState<string>("")
    const [todoList,setTodoList] = useState<ITask[]>([])

    const handleChange = (event:ChangeEvent<HTMLInputElement>) :void=>{
            setTask(event.target.value)
    }
    const addTask = ():void =>{
        const newTask = {
            title:task,
            isCompleted:true

        }
        setTodoList([...todoList,newTask])
        console.log(task)
        console.log(todoList)

    }
    


  return (
    <Grid item xs={5}>
        <Container >
            <Box sx={{marginTop:'10px',display:'flex', gap: '5px'}}>
        <TagFacesIcon/>
<Typography> Happy day</Typography>
</Box>
<Box sx= {{
    marginTop:'30px',
    textAlign:'end'
}}>

    {/* //onSubmit={handleSubmit} */}
            {/* <form  autoComplete="off">
                <FormControl fullWidth={true}> */}
                    <Input placeholder="new task " required={true}
                    onChange={handleChange}
                         value={task}
                        // onChange={(e) => setText(e.target.value)} 
                        
                        />
                    
                {/* </FormControl> */}
                <Button variant='contained' color="primary" type="submit" 
                        style={{
                            marginTop: 5,
                            width:'120px',
                            textAlign:'end'
                        }}
                        onClick={addTask}
                    >Add task</Button>
            {/* </form> */}
            </Box>
        </Container>
        </Grid>
  )
}

export default  TodoForm