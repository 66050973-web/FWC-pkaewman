$(document).ready(function () {
    function isPositiveInteger(val) {
        return /^\d+$/.test(val);
    }

    $("#btn").click(function () {
        const leftStr = $("#left").val().trim();
        const rightStr = $("#right").val().trim();
        const resultParagraph = $("#result");
        const op = $("#op").val();

        if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
            resultParagraph.text("Error :(");
            return;
        }

        const left = parseInt(leftStr, 10);
        const right = parseInt(rightStr, 10);

        if ((op === "/" || op === "%") && right === 0) {
            resultParagraph.text("It’s over 9000!");
            console.log("It’s over 9000!");
            return;
        }

        let res = 0;
        if (op === "+") res = left + right;
        else if (op === "-") res = left - right;
        else if (op === "*") res = left * right;
        else if (op === "/") res = Math.floor(left / right);
        else if (op === "%") res = left % right;

        resultParagraph.text(res);
        console.log(res);
    });
});
