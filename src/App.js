import './App.css';
import { Container, Row } from "react-bootstrap"
import PrintTodos from './Component/PrintTodos';
import PostTodo from './Component/PostTodo';
import { HiPlus } from 'react-icons/hi'
function App() {
  return (
    <div className="App">
      <Container>
        <Row className='justify-content-center'>
          <div className='col-8 my-5 ms-5 ps-5'>
            <div className='main-container d-flex flex-column align-items-center my-3'>
              <h3 className='text-center'>Todo List <span><HiPlus /></span></h3>
              <div className='col-6 mb-3'>
                <PostTodo />
              </div>
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
