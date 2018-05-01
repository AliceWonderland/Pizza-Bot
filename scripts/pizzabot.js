// Javascript ES6

function goPizzaBot(input){ //return route

	if(!input || !input.length ) return 'Pizzabot Error! Check your input, please.';

	const grid = input[0];
	const deliveries = getDeliveries(input);
	let origin = [0,0];
	let route = '';

	for(let destination of deliveries){
		//map coords
		let [origX, origY] = origin,
		  	[destX, destY] = destination;

		// compass direction
		let dirX = getDirection('x', origX, destX),
		  	dirY =  getDirection('y', origY, destY);

		// write route
		while(origX !== destX){
			route += dirX;
			if(origX < destX) origX++;
			else origX--;
		}

		while(origY !== destY){
			route += dirY;
			if(origY < destY) origY++;
			else origY--;
		}

		route += 'D';
		origin = destination.slice();
	}

	return route;
}

function getDeliveries(input){
	return input.slice(input.indexOf('(')+1, -1)
	.split(') (')
	.map( ele => {
		return ele.split(', ').map(ele => Number(ele))
	});
}

function getDirection(axis,start,end){
	const compass = new Map([ ['up','N'],['down','S'],['left','W'],['right','E'],['drop','D'] ]);

	if(start === end) return compass.get('drop');
	if(axis === 'x') return (start < end) ? compass.get('right') : compass.get('left');
	return (start < end) ? compass.get('up') : compass.get('down');
}


let input="5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)";
input="5x5 (1, 3) (4, 4)"; //=> ENNNDEEEND
goPizzaBot(input);


module.exports = {goPizzaBot, getDeliveries, getDirection};