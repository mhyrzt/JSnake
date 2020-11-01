function generateRandom(c = 1){
    return Math.floor(Math.random() * (c + 1));
}

function Snake(){
    this.addTail   = function () {
        tails.push(tails.length);
    }
    this.updateDir = function (dir) {
        direction = dir;
    }
    this.head  = document.getElementById("head");
    this.tails = [];
    this.directions = {
        1: "up",
        2: "down",
        3: "left",
        4: "right"
    };
    this.direction = generateRandom(4);
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
$(document).ready(function() {
    pg = new playGround();
})
