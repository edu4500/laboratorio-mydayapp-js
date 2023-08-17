
const TABLE = "TAREAS";
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

    return {
        memoryTareas,
        length,
        addTarea,
        changeState,
        updateTitle
    }
}