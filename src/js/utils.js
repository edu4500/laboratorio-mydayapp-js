export const sayHello = (text) => {
  return text;
};

export const main = document.getElementsByClassName("main")[0];
export const footer = document.getElementsByClassName("footer")[0];
export const newTodo = document.getElementsByClassName("new-todo")[0];

export const Tarea = (title) => {
  return ({
    id:"1234",
    title,
    completed:"pending"
  })
}