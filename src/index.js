import "./css/base.css";

import { sayHello } from "./js/utils";

sayHello('hello')

var topID = function(){
    var date = new Date().getTime();
    var number = Math.floor(Math.random()*1000)
    var strIndex = date.toString() + number.toString()
    return parseInt(strIndex)
};
var TodoList = getLocalStorage()

var listFilter = document.getElementsByClassName('filters').item(0)

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
    filtrarTasks('')
}

function createTodoItem(t){
    let nodo = document.createElement("li");
    if(t.completed) nodo.className = 'completed'
    let div = document.createElement("div")
    div.className = 'view'
    let edit = document.createElement('input')
    edit.className = 'edit'
    
    edit.addEventListener('keyup',(event)=>{
        if(event.key==='Escape'){
            nodo.className = ''
        }
        else if(event.key === 'Enter'){
            label.innerText = edit.value.trim()
            t.title = edit.value.trim()
            nodo.className = ''
            guardarLocalStorage()
        }
    })

    nodo.appendChild(edit)
    nodo.addEventListener('dblclick',(event)=>{
        edit.value = t.title
        nodo.className = 'editing'
    })
    
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
  
    div.appendChild(label);
    let destroy = document.createElement('button')
    destroy.addEventListener('click',(event)=>{
        nodo.remove()
        let index = TodoList.findIndex(item => item.id === t.id)
        TodoList.splice(index,1)
        showElement()
        guardarLocalStorage()
    })
    destroy.className = 'destroy'
    div.appendChild(destroy)
    
    pintarTodoCount()
    return nodo;
}
var todoCount = document.getElementById('todo-count')
var clearCompleted = document.getElementById('clear-completed')
function pintarTodoCount(){
    var numero = 0
    TodoList.forEach(t => {
        if(t.completed==false) numero++
    })
    if(numero==TodoList.length){
        clearCompleted.setAttribute('hidden','hidden')
    }
    else{
        clearCompleted.removeAttribute('hidden')  
    }
    var plural = numero==1?'':'s'
    todoCount.innerHTML = `<strong id="count">${numero}</strong> item${plural} left`;
    guardarLocalStorage()
}

document.getElementById('new-todo').addEventListener('keyup',(event)=>{
    
    if(event.key==='Enter'){
        var nuevo = {
            id:topID(),
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
    guardarLocalStorage()
    var numero = 0
    TodoList.forEach(t => {
        if(t.completed==false) numero++
    })
    if(numero==TodoList.length){
        clearCompleted.setAttribute('hidden','hidden')
    }
    else{
        clearCompleted.removeAttribute('hidden')  
    }
})

function filtrarTasks(type){
    var ulTodoList = document.getElementById('todo-list')
    ulTodoList.innerHTML = ''
    for(let item of listFilter.children){
        item.getElementsByTagName('a')[0].className = ''
    }
    if(type==='#/'){
        TodoList.forEach(t => {
            ulTodoList.appendChild(createTodoItem(t))
        })
        listFilter.children[0].children[0].className = 'selected'
    }else if(type ==='#/pending'){
        TodoList.filter(t => t.completed == false).forEach(t => {
            ulTodoList.appendChild(createTodoItem(t))
        })
        listFilter.children[1].children[0].className = 'selected'
    }else if(type ==='#/completed'){
        TodoList.filter(t => t.completed == true).forEach(t => {
            ulTodoList.appendChild(createTodoItem(t))
        })
        listFilter.children[2].children[0].className = 'selected'
    }else if(type == ''){
        TodoList.forEach(t => {
            ulTodoList.appendChild(createTodoItem(t))
        })
        listFilter.children[0].children[0].className = 'selected'
    }
}

window.addEventListener('hashchange', function() { 
    const route = location.hash;
    filtrarTasks(route)
});

render();