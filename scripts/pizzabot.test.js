const { goPizzaBot, getDeliveries, getDirection } =require('./pizzabot');


describe('getDeliveries', () => {

	test('parses input string to array', () => {
		expect(getDeliveries("5x5 (1, 3) (4, 4)"))
		.toEqual([ [ 1, 3 ], [ 4, 4 ] ]);
	});

});

describe('getDirection', () => {

	test('gets Direction for Up', () => {
		expect(getDirection('x',0,1)).toBe('E');
	});

	test('gets Direction for Down', () => {
		expect(getDirection('x',1,0)).toBe('W');
	});

	test('gets Direction for Left', () => {
		expect(getDirection('y',0,1)).toBe('N');
	});

	test('gets Direction for Right', () => {
		expect(getDirection('y',1,0)).toBe('S');
	});

});

describe('goPizzaBot', () => {

	// assumes input format is correct
	test('handles undefined input', () => {
		expect(goPizzaBot()).toBe('Pizzabot Error! Check your input, please.');
	});

	test('handles empty string input', () => {
		expect(goPizzaBot('')).toBe('Pizzabot Error! Check your input, please.');
	});

	//moves horiz, then vert
	test('gets correct Route for "5x5 (1, 3) (4, 4)"', () => {
		expect(goPizzaBot("5x5 (1, 3) (4, 4)")).toBe('ENNNDEEEND');
	});

	test('gets correct Route for "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"', () => {
		expect(goPizzaBot("5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)")).toBe('DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD');
	});

});








