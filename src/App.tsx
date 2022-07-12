import { FC } from "react";
import TodoList from "./components/TodoList";
import { Grid, Container, Paper } from '@mui/material'
import ButtonAppBar from "./components/AppBar";

const App: FC = () => {
  return (
    <div>
      <ButtonAppBar />
      <Container >
        <Paper elevation={4}
          style={{
            marginTop: 42,
            border: "1px solid darkgray",
            height: '520px',
          }}>
          <Grid container>
            {/* <TodoForm /> */}
            <TodoList />
          </Grid>
        </Paper></Container>
    </div>
  )
}

export default App;