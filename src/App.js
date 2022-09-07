import './App.css';
import { Container, Row } from "react-bootstrap"
import PrintTodos from './Component/PrintTodos';
function App() {
  return (
    <div className="App">
      <Container>
        <Row className='justify-content-center'>
          <div className='col-8 my-5 ms-5 ps-5'>
            <div className='main-container col-10 my-3 ms-5 ps-5'>
              <h3>Todo List</h3>
              <form className="row g-2">
                <div className="col-5">
                  <label htmlFor="todo-text" className="visually-hidden"></label>
                  <input type="text" className="form-control" id="todo-text" placeholder="Add New Todo" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3">Add</button>
                </div>
              </form>
              {/* <div className='input-todo col-5'>
                <input type="text" placeholder='Add new todo' className='form-control' />
                <button class="btn btn-primary btn-sm mb-1 ms-2" type="submit">Add</button>
              </div> */}
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
