import "./css/base.css";

import { sayHello } from "./js/utils";

sayHello('hello')

var topID = 0;
var TodoList = getLocalStorage()


function getLocalStorage(){
    return JSON.parse(localStorage.getItem('mydayapp-js')) || []
}

function guardarLocalStorage(){
    localStorage.setItem('mydayapp-js',JSON.stringify(TodoList))
}

function showElement(){
    if(TodoList.length == 0){
        document.getElementById('main').setAttribute('hidden','hidden')
        document.getElementById('footer').setAttribute('hidden','hidden')
    }else{
        document.getElementById('main').removeAttribute('hidden')
        document.getElementById('footer').removeAttribute('hidden')
        
    }
}

function render(){
    showElement()
    pintarTodoCount()
    TodoList.forEach(item => {
        let nodo = createTodoItem(item)
        document.getElementById('todo-list').appendChild(nodo)
    })
}

function createTodoItem(t){
    let nodo = document.createElement("li");
    if(t.completed) nodo.className = 'completed'
    let div = document.createElement("div")
    div.className = 'view'
    nodo.appendChild(div)
  
    let checkbox = document.createElement('input')
    checkbox.className = 'toggle'
    checkbox.type = 'checkbox'
    checkbox.id = t.id
    checkbox.checked = t.completed

    checkbox.addEventListener('click',(event)=>{
        if(checkbox.checked){
            nodo.className = 'completed'
            t.completed = true
        }else{
            nodo.removeAttribute('class')
            t.completed = false
        }
        pintarTodoCount()
    })

    div.appendChild(checkbox)
    let label = document.createElement('label')
    label.innerText = t.title
    label.addEventListener('click',(event)=>{
        // <input class="edit" value="Make dishes" />
        let edit = document.createElement('input')
        edit.className = 'edit'
        edit.value = t.title
        nodo.className = 'editing'
        nodo.appendChild(edit)
        edit.addEventListener('keyup',(event)=>{
            if(event.key==='Escape'){
                deleteEditing()
            }
            else if(event.key === 'Enter'){
                label.innerText = edit.value.trim()
                t.title = edit.value.trim()
                deleteEditing()
            }
        })
        function deleteEditing(){
            nodo.className = ''
            edit.remove()
        }
    })
    div.appendChild(label);
    let destroy = document.createElement('button')
    destroy.addEventListener('click',(event)=>{
        nodo.remove()
        let index = TodoList.findIndex(item => item.id === t.id)
        TodoList.splice(index,1)
        showElement()
    })
    destroy.className = 'destroy'
    div.appendChild(destroy)
    
    pintarTodoCount()
    return nodo;
}
var todoCount = document.getElementById('todo-count')
function pintarTodoCount(){
    var numero = 0
    TodoList.forEach(t => {
        if(t.completed==false) numero++
    })
    var plural = numero==1?'':'s'
    todoCount.innerHTML = `<strong id="count">${numero}</strong> item left${plural}`;
    guardarLocalStorage()
}

document.getElementById('new-todo').addEventListener('keyup',(event)=>{
    
    if(event.key==='Enter'){
        var nuevo = {
            id:topID++,
            title:document.getElementById('new-todo').value.trim(),
            completed:false
        }
        TodoList.push(nuevo)
        let nodo = createTodoItem(nuevo)
        document.getElementById('todo-list').appendChild(nodo)
        document.getElementById('new-todo').value = ''
        showElement()
    }
})

document.getElementById('clear-completed').addEventListener('click',(e)=>{
    var ulTodoList = document.getElementById('todo-list').children
    
    for (let task of Array.from(ulTodoList)) {
        let checkbox = task.getElementsByClassName('toggle')[0];
        if(checkbox.checked) task.remove();
    }
 

    TodoList = TodoList.filter(t => t.completed == false)
})



render();