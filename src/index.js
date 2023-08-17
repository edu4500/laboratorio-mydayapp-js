import "./css/base.css";

import { main,footer,newTodo } from "./js/names";
import { Storage } from "./js/storage";
import { Tarea } from "./js/models";




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
  newTodo.addEventListener('keyup',(event)=>{
    if(event.key == 'Enter'){
      let value = newTodo.value.trim();
      _storage.addTarea(new Tarea(value))
      newTodo.value = "";
      visibleListTareas()
    }
  })
})();

