var parent = document.querySelector('.container');
console.dir(parent);

var array = [];
for (var i = 0; i < 10; i++) {
    var r = Tools.getRandom(0, 255);
    var g = Tools.getRandom(0, 255);
    var b = Tools.getRandom(0, 255);
    var box = new Box(parent, {
        backgroundColor: 'rgb(' + r + ',' + g + ',' + b + ')'
    });
    box.random();
    array.push(box);
}
//定时器
setInterval(randomBox, 500);
//初始化先调用一次
randomBox();

function randomBox() {
    for (var i = 0; i < array.length; i++) {
        var box = array[i];
        box.random();
    }
}