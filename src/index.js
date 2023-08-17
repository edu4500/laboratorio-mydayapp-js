import "./css/base.css";

import { main,footer,newTodo,Tarea } from "./js/utils";
import { Storage } from "./js/storage";

(function (){
  let _storage = new Storage();
  if(_storage.length()==0){
    main.setAttribute("hidden","hidden")
    footer.setAttribute("hidden","hidden")
  }
  newTodo.addEventListener('keyup',(event)=>{
    if(event.key == 'Enter'){
      let value = newTodo.value.trim();
      _storage.addTarea(new Tarea(value))
      newTodo.value = "";
    }
  })

})();


