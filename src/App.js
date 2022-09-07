import './App.css';
import { Container, Row } from "react-bootstrap"
import { RiDeleteBin6Fill } from "react-icons/ri"
function App() {
  return (
    <div className="App">
      <Container>
        <Row className='justify-content-center'>
          <div className='col-8 my-5 ms-5 ps-5'>
            <div className='main-container col-10 my-3 ms-5 ps-5'>
              <h3>Todo List</h3>
              <form class="row g-2">
                <div class="col-5">
                  <label for="todo-text" class="visually-hidden"></label>
                  <input type="text" class="form-control" id="todo-text" placeholder="Add New Todo" />
                </div>
                <div class="col-auto">
                  <button type="submit" class="btn btn-primary mb-3">Add</button>
                </div>
              </form>
              {/* <div className='input-todo col-5'>
                <input type="text" placeholder='Add new todo' className='form-control' />
                <button class="btn btn-primary btn-sm mb-1 ms-2" type="submit">Add</button>
              </div> */}
              <div className='todo-list col-6'>
                <div class="list-group">

                  <div className='d-flex mb-3'>
                    <div className='flex-grow-1'>
                      <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" />
                        First checkbox
                      </label>
                    </div>
                    <div className='bg-danger d-flex align-items-center'>
                      <span className='px-3 py-0 m-0 fs-5'><RiDeleteBin6Fill /></span>
                    </div>
                  </div>

                  <div className='d-flex'>
                    <div className='flex-grow-1'>
                      <label class="list-group-item">
                        <input class="form-check-input me-1" type="checkbox" value="" />
                        Second checkbox
                      </label>
                    </div>
                    <div className='bg-danger d-flex align-items-center'>
                      <span className='px-3 py-0 m-0 fs-5'><RiDeleteBin6Fill /></span>
                    </div>
                  </div>

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
