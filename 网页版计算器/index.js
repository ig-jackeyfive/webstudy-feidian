var init = "";
var lastop = "";
var num1 = 0;
var num2 = 0;
var rs = 0;

function display(state) {
    init += state;
    show(init);
}

function show(str) {
    document.querySelector('input').value = str;
}

function getOp(op) {
    lastop = op;
    num1 = parseFloat(init);
    display(op);
    init = '';
}

function getResult() {
    num2 = parseFloat(init);
    init = "";
    init = cal(num1, num2, lastop);
    show(init);
}

function fan() {
    init = String((parseFloat(document.querySelector('.text').value) * (-1)));
    document.querySelector('.text').value = init;
}

function cal(n1, n2, ope) {
    switch (ope) {
        case '+':
            return (n1 + n2);
            break;
        case '-':
            return (n1 - n2);
            break;
        case '*':
            return (n1 * n2);
            break;
        case '/':
            if (n2 != 0) {
                return (n1 / n2);
                break;
            } else {
                break;
            }
        case '%':
            return (n1 % n2);
            break;
    }

}

function ce() {
    var size = init.length;
    init = init.substring(0, size - 1);
    document.querySelector('.text').value = init;
}

function clean() {
    init = "";
    lastop = "";
    num1 = 0;
    num2 = 0;
    rs = 0;
    document.querySelector('.text').value = "";
}