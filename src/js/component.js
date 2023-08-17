
export const tareaItemView = (itemTarea) => {
    let nuevo = document.createElement(`li`);
    nuevo.innerHTML = `
        <div class="view">
            <input class="toggle" type="checkbox" />
            <label>${itemTarea.title}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Buy a unicorn" />
    `
    return nuevo
}

export const todoListView = (item,list) => {
    list.forEach(element => {
        addItenTodoView(item,element)
    });
}

export const addItenTodoView = (todoList,element) => {
    let newEle = tareaItemView(element)
    todoList.appendChild(newEle)
}