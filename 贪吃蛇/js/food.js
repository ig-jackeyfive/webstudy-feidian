(function() {
    function Food(options) {
        options = options || {};
        this.color = options.color || 'green';
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || 20;
        this.height = options.height || 20;
    }
    //渲染
    var elements = []; //记录创建的食物
    Food.prototype.render = function(map) {
            remove();
            //随机生成坐标
            this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
            // console.log(this.x);

            this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
            // console.log(this.y);
            this.color = 'rgb(' + Tools.getRandom(0, 255) + ',' + Tools.getRandom(0, 255) + ',' + Tools.getRandom(0, 255) + ')';
            var div = document.createElement('div');
            map.appendChild(div);
            elements.push(div);
            div.style.position = 'absolute';
            div.style.backgroundColor = this.color;
            div.style.left = this.x + 'px';
            div.style.top = this.y + 'px';
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';


        }
        //删除食物
    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {
            // console.log(elements[i].parentNode);
            //删除div
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i, 1);
        }
    }

    window.Food = Food;
})()
//测试