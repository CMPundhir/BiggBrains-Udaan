let x1 = 0;
let y1 = 0;
let x2 = 1000;
let y2 = 500;

let count = 0;

function drawLine() {
	const myCanvas = document.getElementById('myCanvas');
	const context = myCanvas.getContext("2d");

	context.moveTo(x1 + count, y1);
	context.lineTo(x2 + count, y2);
	context.stroke();

	context.moveTo(x1 - count, y1);
	context.lineTo(x2 - count, y2);
	context.stroke();

	context.moveTo(x2 + count, y1);
	context.lineTo(y1 + count, y2);
	context.stroke();

	context.moveTo(x2 - count, y1);
	context.lineTo(y1 - count, y2);
	context.stroke();

	count += 10;
}

function drawCircle() {
	const myCanvas = document.getElementById('myCanvas');
	const context = myCanvas.getContext("2d");

	context.beginPath();
	context.arc(500, 250, count, 0, 2 * Math.PI);
	context.stroke();

	count += 10;
}


function drawText() {
	const myCanvas = document.getElementById('myCanvas');
	const context = myCanvas.getContext("2d");

	context.font = "30px Arial";
	context.fillText("Hello Canvas", 10*count, 200+count);
	context.stroke();

	count += 10;
}
