const ftList = document.getElementById("ft_list");
const btnNew = document.getElementById("btn-new");

window.onload = function () {
    const todos = getTodosFromCookie();
    for (let i = todos.length - 1; i >= 0; i--) {
        addTodoDOM(todos[i]);
    }
};

btnNew.addEventListener("click", () => {
    const text = prompt("Enter a new TO DO:");
    if (text !== null && text.trim() !== "") {
        addTodoDOM(text.trim());
        saveTodosToCookie();
    }
});


function addTodoDOM(text) {
    const item = document.createElement("div");
    item.textContent = text;
    item.addEventListener("click", () => {
        if (confirm("Do you want to remove this TO DO?")) {
            item.remove();
            saveTodosToCookie();
        }
    });

    ftList.prepend(item); 
}

function saveTodosToCookie() {
    const items = [];
    ftList.querySelectorAll("div").forEach((div) => {
        items.push(div.textContent);
    });
    const jsonStr = encodeURIComponent(JSON.stringify(items));
    document.cookie = `ft_todos=${jsonStr}; path=/; max-age=604800`;
}

function getTodosFromCookie() {
    const name = "ft_todos=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            try {
                return JSON.parse(c.substring(name.length, c.length));
            } catch (e) {
                return [];
            }
        }
    }
    return [];
}