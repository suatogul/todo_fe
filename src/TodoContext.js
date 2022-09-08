import { createContext, useEffect, useState } from 'react';
import * as todoService from './TodoService'
// import * as ParticipantService from '../../service/Participant-Service'


export const TodoContext = createContext();

const TodoContextProvider = (props) => {

    const [getTodoList, setGetTodoList] = useState([])

    // const getJoinYears = async () => {
    //     const response = await ParticipantService.participantJoinDates();
    //     const data = await response;
    //     setExistedTerms(data)
    //     setSelectedTerm(data[0])
    // }

    // const sendNotification = async (pNotification) => {
    //     await communicationService.sendNotification(pNotification)
    // }

    // const handleCurrentTermSelection = (pTerm) => {
    //     setSelectedTerm(pTerm)
    // }

    const postTodo = async (pTodo) => {
        await todoService.addTodo(pTodo);
        await getAllTodos();
    };

    const getAllTodos = async () => {
        const response = await todoService.getTodoList();
        const data = await response;
        setGetTodoList(data);
    };

    // const addInvitation = async (pInvitation) => {
    //     try {
    //         return await communicationService.saveMail(pInvitation)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    useEffect(() => {
        // we need a value for the term at the begining
        const getList = async () => {
            getAllTodos()
        }
        getList();
    }, []);

    return (
        <TodoContext.Provider value={{ getTodoList, postTodo }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
