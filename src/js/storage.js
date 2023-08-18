
const TABLE = "mydayapp-js";
export const Storage = () => {

    let getElemntos = () => {
        let tareas = localStorage.getItem(TABLE);
        return tareas == null ? [] : JSON.parse(tareas);
    }
    
    let memoryTareas = getElemntos();
    let length = ()=>{
        if(memoryTareas===undefined || memoryTareas===null) return 0;
        return memoryTareas.length;
    };

    let pendingLength = () => {
        return memoryTareas.filter(t => t.completed == 'pending').length
    }

    let addTarea = (item)=>{
        memoryTareas.push(item);
        localStorage.setItem(TABLE,JSON.stringify(memoryTareas));
    }

    let changeState = (item)=>{
        let update = memoryTareas.find(t => t.id === item.id);
        update.completed = item.completed;
        localStorage.setItem(TABLE,JSON.stringify(memoryTareas));
    }

    let updateTitle = (item)=>{
        let update = memoryTareas.find(t => t.id === item.id);
        update.completed = item.title;
        localStorage.setItem(TABLE,JSON.stringify(memoryTareas));
    }

    let elimarTodasTareas = ()=>{
        memoryTareas = memoryTareas.filter(t => t.completed == 'pending')
        localStorage.setItem(TABLE,JSON.stringify(memoryTareas));
    }

    return {
        memoryTareas,
        length,
        pendingLength,
        addTarea,
        changeState,
        updateTitle,
        elimarTodasTareas
    }
}