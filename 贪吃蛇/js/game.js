(function() {
    function Game(map) {
        that = this;
        //属性：蛇，食物，地图
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
    }
    Game.prototype.start = function() {
            // 1.将蛇和食物渲染到地图上
            this.food.render(this.map);
            this.snake.render(this.map);
            //2.开始游戏的逻辑
            // 2.1让蛇移动起来 （定时器）
            //2.2当蛇碰到边界时游戏结束
            runSnake();
            //2.3通过键盘控制蛇移动的方向
            bindkey();
            //2.4当蛇遇到食物时处理



        }
        //通过键盘绑定事件
    function bindkey() {
        document.addEventListener('keydown', function(e) {
            // console.log(e.keyCode);
            switch (e.keyCode) {
                case 38:
                    if (that.snake.direction != 'bottom') {
                        that.snake.direction = 'top';
                    }
                    break;
                case 87:
                    if (that.snake.direction != 'bottom') {
                        that.snake.direction = 'top';
                    }
                    break;
                case 40:
                    if (that.snake.direction != 'top') {
                        that.snake.direction = 'bottom';
                    }

                    break;
                case 83:
                    if (that.snake.direction != 'top') {
                        that.snake.direction = 'bottom';
                    }
                    break;
                case 37:
                    if (that.snake.direction != 'right') {
                        that.snake.direction = 'left';
                    }

                    break;
                case 65:
                    if (that.snake.direction != 'right') {
                        that.snake.direction = 'left';
                    }
                    break;
                case 39:
                    if (that.snake.direction != 'left') {
                        that.snake.direction = 'right';
                    }

                    break;
                case 68:
                    if (that.snake.direction != 'left') {
                        that.snake.direction = 'right';
                    }

                    break;
            }
        })
    }
    //私有的函数，让蛇移动起来
    function runSnake() {
        var settime = setInterval(function() {
            //定时器里的this指的是window
            that.snake.move(that.map, that.food);
            that.snake.render(that.map);
            //2.2当蛇碰到边界时游戏结束
            var maxX = that.map.offsetWidth / that.snake.width;
            var maxY = that.map.offsetHeight / that.snake.height;
            if (that.snake.body[0].x >= maxX || that.snake.body[0].x < 0 || that.snake.body[0].y >= maxY || that.snake.body[0].y < 0) {
                alert('游戏结束^v^');
                clearInterval(settime);
            }
            //当蛇头碰到蛇身时游戏结束
            for (var i = 1; i < that.snake.body.length; i++) {
                if (that.snake.body[0].x === that.snake.body[i].x && that.snake.body[0].y === that.snake.body[i].y) {
                    alert('你吃了你自己，游戏结束^v^');
                    clearInterval(settime);
                    break;
                }
            }

        }, 250)
    }
    window.Game = Game;
})()
//测试