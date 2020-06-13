// 创建方块构造函数
function Box(parent, options) {
    options = options || {};
    //设置对象的属性
    this.backgroundColor = options.backgroundColor || 'red';
    this.width = options.width || '20';
    this.heigth = options.heigth || '20';
    this.x = options.x || 0;
    this.y = options.y || 0;
    // 创建div
    this.div = document.createElement('div');
    parent.appendChild(this.div);
    this.parent = parent;
    this.init();

}
//设置div的样式
Box.prototype.init = function() {
    var div = this.div;
    div.style.width = this.width + 'px';
    div.style.height = this.heigth + 'px';
    div.style.left = this.x + 'px';
    div.style.top = this.y + 'px';
    div.style.backgroundColor = this.backgroundColor;
    div.style.position = 'absolute';
}

//设置div的位置
Box.prototype.random = function() {
    //父容器的宽度/方块的宽度  总共能放多少个方块
    // var x = Tools.getRandom(0, this.parent.style.width / this.width - 1) * this.width;
    var x = Tools.getRandom(0, this.parent.offsetWidth / this.width - 1) * this.width;
    var y = Tools.getRandom(0, this.parent.offsetHeight / this.heigth - 1) * this.heigth;
    this.div.style.left = x + 'px';
    this.div.style.top = y + 'px';
}