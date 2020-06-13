 (function() {
     var elements = [];

     function Snake(options) {
         //  this.options = options || {};
         options = options || {};
         this.width = options.width || 20;
         this.height = options.height || 20;
         this.direction = options.direction || 'right';
         this.headx = Tools.getRandom(2, map.offsetWidth / this.width - 6);
         this.heady = Tools.getRandom(2, map.offsetHeight / this.height - 2);
         this.colorbody = 'rgb(' + Tools.getRandom(0, 255) + ',' + Tools.getRandom(0, 255) + ',' + Tools.getRandom(0, 255) + ')';
         this.body = [
             { x: this.headx, y: this.heady, color: 'rgb(' + Tools.getRandom(0, 255) + ',' + Tools.getRandom(0, 255) + ',' + Tools.getRandom(0, 255) + ')' },
             { x: this.headx - 1, y: this.heady, color: this.colorbody },
             { x: this.headx - 2, y: this.heady, color: this.colorbody }
         ]
     }
     //  渲染蛇到地图上
     Snake.prototype.render = function(map) {
         remove();
         for (var i = this.body.length - 1; i >= 0; i--) {
             var objiect = this.body[i];
             var div = document.createElement('div');
             map.appendChild(div);
             elements.push(div);
             div.style.position = 'absolute';
             div.style.width = this.width + 'px';
             div.style.height = this.height + 'px';
             div.style.left = objiect.x * this.width + 'px';
             div.style.top = objiect.y * this.height + 'px';
             div.style.backgroundColor = objiect.color;
         }
     }
     Snake.prototype.move = function(map, food) {
             // 蛇身的坐标是前一个的坐标
             for (var i = this.body.length - 1; i > 0; i--) {
                 this.body[i].x = this.body[i - 1].x;
                 this.body[i].y = this.body[i - 1].y;
             }
             var head = this.body[0];
             //蛇头控制方向
             switch (this.direction) {
                 case 'right': //引号
                     head.x += 1;
                     break;
                 case 'left':
                     head.x -= 1;
                     break;
                 case 'top':
                     head.y -= 1;
                     break;
                 case 'bottom':
                     head.y += 1;
                     break;
             }
             //遇到食物长度加一
             var headX = head.x * this.width;
             //  console.log(headX);
             //  console.log(food.x);

             var headY = head.y * this.height;
             if (headX === food.x && headY === food.y) {
                 //  console.log(food.x);

                 var last = this.body[this.body.length - 1];
                 this.body.push({
                     x: last.x,
                     y: last.y,
                     color: last.color
                 });
                 // this.body.push(last);
                 food.render(map);
             }
         }
         //私有的函数remove，删除蛇
     function remove() {
         for (var i = elements.length - 1; i >= 0; i--) {
             //  console.log(elements[i].parentNode);
             //删除div
             elements[i].parentNode.removeChild(elements[i]);
             elements.splice(i, 1);
         }
     }
     //测试

     //暴露构造函数给外部
     window.Snake = Snake;
 })()