import "./css/base.css";

import { main,footer,newTodo,todoList,todoCount,clearCompleted } from "./js/names";
import { Storage } from "./js/storage";
import { Tarea } from "./js/models";
import { todoListView,addItenTodoView } from "./js/component";



(function (){
  let _storage = new Storage();
  todoCount.addEventListener('count',(e)=>{
    let pendingLength = _storage.pendingLength().toString()
    let plural = pendingLength == 1 ? '':'s';
    todoCount.innerHTML = `<strong>${pendingLength}</strong> item${plural} `
  })
  function visibleListTareas(){
    if(_storage.length()==0){
      main.setAttribute("hidden","hidden")
      footer.setAttribute("hidden","hidden")
    }else{
      main.removeAttribute("hidden")
      footer.removeAttribute("hidden")
      todoCount.dispatchEvent(new Event('count'))
    }
  }
  visibleListTareas()
  todoListView(todoList,_storage)
  newTodo.addEventListener('keyup',(event)=>{
    if(event.key == 'Enter'){
      let value = newTodo.value.trim();
      let tarea = new Tarea(value)
      _storage.addTarea(tarea)
      newTodo.value = "";
      visibleListTareas()
      addItenTodoView(todoList,tarea)
    }
  })
  clearCompleted.addEventListener('click',function (e){
    _storage.elimarTodasTareas();
    let listCompleted = todoList.getElementsByClassName("completed");
    for (let item of Array.from(listCompleted)) {
      item.remove()
    }
  })

})();

