

export const tareaItemView = (itemTarea) => {
    let nuevo = document.createElement(`li`);
    
    nuevo.innerHTML = `
        <div class="view">
            <input class="toggle" type="checkbox" />
            <label>${itemTarea.title}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="" />
    `
    if(itemTarea.completed=='completed'){
        nuevo.setAttribute('class','completed')
        let checkbox = nuevo.getElementsByClassName('toggle')[0]
        checkbox.checked = true;
    }
    return nuevo
}

export const todoListView = (item,stogare) => {
    stogare.memoryTareas.forEach(element => {
        addItenTodoView(item,element,stogare)
    });
}

export const addItenTodoView = (todoList,element,stogare) => {
    let newEle = tareaItemView(element)
    let checkbox = newEle.getElementsByClassName('toggle')[0]
    checkbox.onclick = function(){
        if(checkbox.checked){
            element.completed = "completed";
            newEle.setAttribute('class','completed')
        }else{
            element.completed = "pending";
            newEle.removeAttribute('class')
        }
        stogare.changeState(element)
    }
    newEle.ondblclick = function(){
        newEle.setAttribute('class','editing')
        let edit = newEle.getElementsByClassName('edit')[0]
        edit.value = element.title;
    }
    todoList.appendChild(newEle)
}