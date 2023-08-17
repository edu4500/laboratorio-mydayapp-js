
const TABLE = "TAREAS";
export const Storage = () => {

    let getElemntos = () => {
        let tareas = localStorage.getItem(TABLE);
        console.log(tareas)
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

    return {
        memoryTareas,
        length,
        addTarea
    }
}