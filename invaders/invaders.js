var Invaders = {
    context: null,
    canvas: null,
    playerShip: null,
    playerX: 0,
    playerY: 0,
    left: false,
    right: false
};

$(function () {
    "strict mode";
    reset();
});

function reset() {
    "strict mode";
    Invaders.canvas = document.getElementById("board");
    Invaders.context = Invaders.canvas.getContext("2d");
    Invaders.playerX = 384;
    Invaders.playerY = 555;
    Invaders.playerShip = new Image;
    Invaders.playerShip.onload = function () {
        render()
    }
    Invaders.playerShip.src = "player_ship.png";
    
    $("body").on("keydown", function (event) {
        if (event.which === 65) {
            Invaders.left = true;
        } else if (event.which === 68) {
            Invaders.right = true;
        }
    });
    $("body").on("keyup", function (event) {
        if (event.which === 65) {
            Invaders.left = false;
        } else if (event.which === 68) {
            Invaders.right = false;
        }
    });
    
    setTimeout(cycle, 30);
}

function update() {
    "strict mode";
    if (Invaders.left === true) {
        Invaders.playerX -= 2.5;
    } else if (Invaders.right === true) {
        Invaders.playerX += 2.5;
    }
}

function render() {
    "strict mode";
    Invaders.context.fillRect(0, 0, 800, 600);
    Invaders.context.stroke();
    Invaders.context.drawImage(Invaders.playerShip, Invaders.playerX, Invaders.playerY);
}

function cycle() {
    update();
    render();
    setTimeout(cycle, 30);
}