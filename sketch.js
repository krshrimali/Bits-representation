function setup() {
	// create canvas
	createCanvas(600, 600);
	// console.log(math.eval('2^2'));
	input = createInput();
	input.position(20, 65);

	button = createButton('submit');
	button.position(input.x + input.width, 65);
	// button.mousePressed(g);
	// fill(0, 102, 153, 51);
	// greeting = createElement('h2', 'Enter bit sequence?');
	// greeting.position(20, 5);

	textAlign(CENTER);
	textSize(50);
}

function draw() {

	// createCanvas(400, 400);
	background(51);
	fill(150);
	textSize(30);
	text('BIT SEQUENCE: ', 130, 47);
	var bits = input.value();
	console.log(bits);
	stroke(255);
	line(0, 300, 600, 300);
	line(0, 200, 600, 200);
	line(0, 400, 600, 400);
	// var x_value = 0;
	// if()
	var x_value = 0;
	var x_value2 = 0;
	var y_value = 300;
	var y_value2 = 200;
	var x_value3 = 0;
	var y_value3 = 400;
	var flag = 0;

	for(var i = 0; i < bits.length; i++){
		x_value = draw_square(bits[i], x_value, y_value);
		x_value2 = draw_square_polar(bits[i], x_value2, y_value2);

		if(bits[i] == 1 && flag == 0){
			x_value3 = draw_square_polar(1, x_value3, y_value3);
			flag = 1;
		}
		else if(bits[i] == 1 && flag == 1) {
			x_value3 = draw_square_polar(0, x_value3, y_value3);
			flag = 0;
		}
		else {
			x_value3 += 40;
		}
	}
}

function draw_square(value, x_value, y_value) {
	if(value == 1) {
		strokeWeight(3);
		line(x_value, y_value, x_value, y_value - 40);
		line(x_value, y_value - 40, x_value + 40, y_value - 40);
		line(x_value + 40, y_value - 40, x_value + 40, y_value);
		// return x_value + 40;
	}
	return x_value + 40;
}

function draw_square_polar(value, x_value, y_value) {
	if(value == 1) {
		strokeWeight(3);
		line(x_value, y_value, x_value, y_value - 40);
		line(x_value, y_value - 40, x_value + 40, y_value - 40);
		line(x_value + 40, y_value - 40, x_value + 40, y_value);
		// return x_value + 40;
	}
	else {
		strokeWeight(3);
		line(x_value, y_value, x_value, y_value + 40);
		line(x_value, y_value + 40, x_value + 40, y_value + 40);
		line(x_value + 40, y_value + 40, x_value + 40, y_value);
	}
	return x_value + 40;
}

function draw_square_bipolar(value, x_value, y_value){

}