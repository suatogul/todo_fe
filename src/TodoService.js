// Pay attention the data whic comes from DB. Is it json or text

// !============ Soft skills ========== Starts
export async function getTodoList() {
    try {
        const response = await fetch(`http://localhost:8080/todo`);
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Error todo list");
    }
};

export async function addTodo(pAddTodo) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pAddTodo)
    };
    try {
        const response = await fetch(`http://localhost:8080/todo`, requestOptions);
        const data = await response.json();
        console.log("frontend service ", data)
        return data;
    } catch (error) {
        console.log("Error");
    }
}

export async function deleteTodo(pId) {
    try {
        await fetch(`http://localhost:8080/todo/${pId}`, { method: 'DELETE' });
    } catch {
        console.log("delete Error");
    }

}

export async function updateTodo(updatedTodo) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTodo)
    };
    try {
        await fetch(`http://localhost:8080/todo`, requestOptions);

    } catch (error) {
        console.log("Error");
    }
}
// !============ Soft skills ========== Finishes