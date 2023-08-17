import { uuidv4 } from "./utils"

export const Tarea = (title) => {
    return ({
      id:uuidv4(),
      title,
      completed:"pending"
    })
}