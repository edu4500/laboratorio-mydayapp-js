
export const tareaItemView = (itemTarea) => {
    let nuevo = document.createElement(`li`);
    nuevo.innerHTML = `
        <div class="view">
            <input class="toggle" type="checkbox" />
            <label>${itemTarea.title}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Buy a unicorn" />
    `
    return nuevo
}

export const todoListView = (item,list) => {
    list.forEach(element => {
        let newEle = tareaItemView(element)
        item.appendChild(newEle)
    });
}