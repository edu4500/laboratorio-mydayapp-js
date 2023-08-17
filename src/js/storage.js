
const TABLE = "TAREAS";
export const Storage = () => {

    let getElemntos = () => {
        // let strTareas = localStorage.getItem(TABLE);
        // let tareas = JSON.stringify(strTareas);
        let tareas = localStorage.getItem(TABLE);
        console.log(tareas)
        return tareas == null ? [] : tareas;
    }
    
    let memoryTareas = getElemntos();
    let length = ()=>{
        if(memoryTareas===undefined || memoryTareas===null) return 0;
        return memoryTareas.length;
    };

    let addTarea = (item)=>{
        memoryTareas.push(item);
        localStorage.setItem(TABLE,memoryTareas);
    }

    return {
        memoryTareas,
        length,
        addTarea
    }
}