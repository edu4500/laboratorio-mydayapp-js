import "./css/base.css";

import { main,footer,newTodo,todoList } from "./js/names";
import { Storage } from "./js/storage";
import { Tarea } from "./js/models";
import { todoListView,addItenTodoView } from "./js/component";



(function (){
  let _storage = new Storage();
  function visibleListTareas(){
    if(_storage.length()==0){
      main.setAttribute("hidden","hidden")
      footer.setAttribute("hidden","hidden")
    }else{
      main.removeAttribute("hidden")
      footer.removeAttribute("hidden")
    }
  }
  visibleListTareas()
  
  todoListView(todoList,_storage.memoryTareas)
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
})();

