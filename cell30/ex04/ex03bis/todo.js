$(document).ready(function () {
    const $ftList = $("#ft_list");

    function getTodosFromCookie() {
        const name = "ft_todos=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                try {
                    return JSON.parse(c.substring(name.length));
                } catch (e) {
                    return [];
                }
            }
        }
        return [];
    }

    function saveTodosToCookie() {
        const items = [];
        $ftList.children("div").each(function () {
            items.push($(this).text());
        });
        const jsonStr = encodeURIComponent(JSON.stringify(items));
        document.cookie = "ft_todos=" + jsonStr + "; path=/; max-age=604800";
    }

    function addTodoDOM(text) {
        const $item = $("<div></div>").text(text);
        $item.click(function () {
            if (confirm("Do you want to remove this TO DO?")) {
                $(this).remove();
                saveTodosToCookie();
            }
        });
        $ftList.prepend($item);
    }

    const todos = getTodosFromCookie();
    for (let i = todos.length - 1; i >= 0; i--) {
        addTodoDOM(todos[i]);
    }

    $("#btn-new").click(function () {
        const text = prompt("Enter a new TO DO:");
        if (text !== null && text.trim() !== "") {
            addTodoDOM(text.trim());
            saveTodosToCookie();
        }
    });
});
