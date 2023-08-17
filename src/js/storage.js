
const TABLE = "TAREAS";
export const storage = () => {
    let getElemntos = () => {
        let strTareas = localStorage.getItem(TABLE);
        let tareas = JSON.stringify(strTareas);
        return tareas
    }
}