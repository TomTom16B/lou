const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const turtle = {
    x: 0,
    y: 0,
    heading: 0,
    pen: true,
    color: "black",
    width: 10
};

ctx.lineWidth = turtle.width;
ctx.lineCap = "round";
ctx.lineJoin = "round";

// Transformer les coordonnées Turtle
// en coordonnées Canvas
function canvasX(x) {
    return canvas.width / 2 + x;
}

function canvasY(y) {
    return canvas.height / 2 - y;
}

function penup() {
    turtle.pen = false;
}

function pendown() {
    turtle.pen = true;
}

function goto(x, y) {
    turtle.x = x;
    turtle.y = y;

    if (turtle.pen) {
        ctx.lineTo(canvasX(x), canvasY(y));
    } else {
        ctx.beginPath();
        ctx.moveTo(canvasX(x), canvasY(y));
    }
}

function setheading(angle) {
    turtle.heading = angle;
}

function right(angle) {
    turtle.heading -= angle;
}

function left(angle) {
    turtle.heading += angle;
}

function pencolor(color) {
    turtle.color = color;
    ctx.strokeStyle = color;
}

function pensize(size) {
    turtle.width = size;
    ctx.lineWidth = size;
}

function forward(distance) {

    const oldX = turtle.x;
    const oldY = turtle.y;

    const angle = turtle.heading * Math.PI / 180;

    const newX =
        oldX + Math.cos(angle) * distance;

    const newY =
        oldY + Math.sin(angle) * distance;

    if (turtle.pen) {

        ctx.beginPath();

        ctx.moveTo(
            canvasX(oldX),
            canvasY(oldY)
        );

        ctx.lineTo(
            canvasX(newX),
            canvasY(newY)
        );

        ctx.strokeStyle = turtle.color;
        ctx.lineWidth = turtle.width;

        ctx.stroke();
    }

    turtle.x = newX;
    turtle.y = newY;
}

function backward(distance) {
    forward(-distance);
}

function circle(radius, extent = 360) {
    const r = Math.abs(radius);

    // Turtle :
    // radius positif  = tourne à gauche
    // radius négatif  = tourne à droite
    const direction = radius >= 0 ? 1 : -1;

    const startX = turtle.x;
    const startY = turtle.y;
    const startHeading = turtle.heading;

    const headingRad = startHeading * Math.PI / 180;

    // Centre du cercle
    const centerX =
        startX - Math.sin(headingRad) * radius;

    const centerY =
        startY + Math.cos(headingRad) * radius;

    // Angle du point de départ autour du centre
    let currentAngle = Math.atan2(
        startY - centerY,
        startX - centerX
    );

    const steps = Math.max(
        10,
        Math.ceil(Math.abs(extent) / 3)
    );

    const step = extent / steps;

    ctx.beginPath();

    ctx.moveTo(
        canvasX(turtle.x),
        canvasY(turtle.y)
    );

    for (let i = 0; i < steps; i++) {

        currentAngle +=
            direction * step * Math.PI / 180;

        const newX =
            centerX + Math.cos(currentAngle) * r;

        const newY =
            centerY + Math.sin(currentAngle) * r;

        ctx.lineTo(
            canvasX(newX),
            canvasY(newY)
        );

        turtle.x = newX;
        turtle.y = newY;

        turtle.heading += direction * step;
    }

    ctx.strokeStyle = turtle.color;
    ctx.lineWidth = turtle.width;
    ctx.stroke();
}


const x = 50;

pensize(10);

const x_place = 0;
const y_place = 0 + x;


function paf(_x, _y) {

    penup();
    goto(_x, _y);
    backward(x);
    pendown();
    circle(x);
    penup();
    forward(2 * x);
    pendown();
    circle(x);
    penup();
    backward(x * 1.75);
    right(90);
    pendown();
    backward(x / 25);
    forward(5 * x);
    circle(x * 0.75, 180);
    forward(5 * x + x / 25);
}


function lou(_x, _y) {

    penup();

    // L
    goto(
        _x - 2 * x,
        _y + 2 * x
    );

    pendown();

    pencolor("red");

    setheading(135);

    forward(x);

    backward(x);

    right(90);

    pencolor("orange");

    forward(x / 2);


    // O
    penup();

    goto(
        _x,
        _y + 3 * x
    );

    pendown();

    setheading(0);

    pencolor("yellow");

    circle(x / 2, -180);

    pencolor("green");

    circle(x / 2, -180);


    // U
    penup();

    goto(
        _x + 2 * x,
        _y + 2 * x
    );

    pendown();

    pencolor("blue");

    setheading(-45);

    circle(x / 2, -90);

    backward(x / 2);


    penup();

    goto(
        _x + 2 * x,
        _y + 2 * x
    );

    pendown();

    pencolor("purple");

    setheading(-45);

    circle(x / 2, 90);

    forward(x / 2);
}

paf(x_place, y_place);
lou(x_place, y_place);