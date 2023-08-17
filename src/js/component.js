

export const tareaItemView = (itemTarea) => {
    let nuevo = document.createElement(`li`);
    nuevo.setAttribute('data-id',itemTarea.id)
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

export const todoListView = (item,list,callback) => {
    list.forEach(element => {
        addItenTodoView(item,element,callback)
    });
}

export const addItenTodoView = (todoList,element,callback) => {
    let newEle = tareaItemView(element)
    let checkbox = newEle.getElementsByClassName('toggle')[0]
    checkbox.onclick = callback(checkbox,element)
    todoList.appendChild(newEle)
}