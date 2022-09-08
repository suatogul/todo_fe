import './App.css';
import { Container, Row } from "react-bootstrap"
import PrintTodos from './Component/PrintTodos';
import PostTodo from './Component/PostTodo';
function App() {
  return (
    <div className="App">
      <Container>
        <Row className='justify-content-center'>
          <div className='col-8 my-5 ms-5 ps-5'>
            <div className='main-container col-10 my-3 ms-5 ps-5'>
              <h3>Todo List</h3>
              <PostTodo />
              <div className='todo-list col-6'>
                <div className="list-group">
                  <PrintTodos />
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default App;
