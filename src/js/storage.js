
const TABLE = "TAREAS";
export const Storage = () => {

    let getElemntos = () => {
        // let strTareas = localStorage.getItem(TABLE);
        // let tareas = JSON.stringify(strTareas);
        return localStorage.getItem(TABLE);
    }
    
    let memoryTareas = getElemntos();
    let length = (()=>{
        debugger
        if(memoryTareas===undefined || memoryTareas===null) return 0;
        return memoryTareas.length;
    })();

    return {
        memoryTareas,
        length
    }
}