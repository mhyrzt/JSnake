function generateRandom(c = 1){
    return Math.floor(Math.random() * (c + 1));
}

function Snake(){
    this.addTail   = function () {
        tails.push(tails.length);
    }
    
    this.getOpos = function () {
        return this.opposits[this.direction]
    }
    
    this.ligalMove = function (dir) {
        return !(this.direction == dir || dir == this.getOpos());
    }

    this.updateDir = function (dir) {
        if (this.ligalMove(dir))
            this.direction = dir;
    }
    
    this.head  = document.getElementById("head");
    this.tails = [];
    this.directions = [
        'UP'    ,
        'DOWN'  ,
        'LEFT'  ,
        'RIGHT'
    ];
    this.opposits = {
        'UP'   :'DOWN'  ,
        'DOWN' :'UP'    ,
        'RIGHT':'LEFT'  ,
        'LEFT' :'RIGHT'
    };
    this.direction = this.directions[generateRandom(3)];

}

function playGround(){
    this.renderInfo   = function () {
        document.getElementById("score").innerHTML  = `Score:  ${this.playeScore}`;
        document.getElementById("record").innerHTML = `Record: ${this.playerRecord}`; 
    }

    this.getRecord    = function () {
        let record = localStorage.getItem('record');
        if (record) return record;
        localStorage.setItem('record', 0);
        return 0;
    }

    this.updateRecord = function () {
        if (playeScore > playerRecord)
            playerRecord = playeScore;
    }

    this.generateFood = function () {
        let x  = generateRandom(100);
        let y  = generateRandom(100);        
        let food = document.getElementById("food");
        food.style.left = `${x}%`;
        food.style.top  = `${y}%`;
    }
    
    this.playeScore = 0;
    this.snake = new Snake();
    this.playerRecord = this.getRecord();
    this.renderInfo();
}

var pg;
let KEYS = {
    37: 'LEFT',
    38: 'UP',
    39: 'RIGHT',
    40: 'DOWN',
    65: 'LEFT',
    68: 'RIGHT',
    83: 'DOWN',
    87: 'UP'
};

$(document).ready(function() {
    pg = new playGround();
    document.body.addEventListener("keydown", function(event) {
        let key = event.keyCode;
        let dir = KEYS[key];
        pg.snake.updateDir(dir);
    });
});
