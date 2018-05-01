const { goPizzaBot, getDeliveries, getDirection, checkInputFormat } = require('./pizzabot');

describe('goPizzaBot Tests', () => {

	describe('getDeliveries', () => {
		test('parses input string to array', () => {
			expect(getDeliveries("5x5 (1, 3) (4, 4)"))
			.toEqual([ [ 1, 3 ], [ 4, 4 ] ]);
		});
	});

	describe('getDirection', () => {
		test('gets Direction for Up', () => {
			expect(getDirection('y',0,1)).toBe('N');
		});
		test('gets Direction for Down', () => {
			expect(getDirection('y',1,0)).toBe('S');
		});
		test('gets Direction for Left', () => {
			expect(getDirection('x',1,0)).toBe('W');
		});
		test('gets Direction for Right', () => {
			expect(getDirection('x',0,1)).toBe('E');
		});
	});

	describe('goPizzaBot', () => {
		// assumes input format is correct
		test('handles undefined input', () => {
			expect(goPizzaBot())
			.toBe('Pizzabot Error! Check your input, please.');
		});
		test('handles empty string input', () => {
			expect(goPizzaBot(''))
			.toBe('Pizzabot Error! Check your input, please.');
		});

		//moves horiz, then vert
		test('gets correct Route for "5x5 (1, 3) (4, 4)"', () => {
			expect(goPizzaBot("5x5 (1, 3) (4, 4)")).toBe('ENNNDEEEND');
		});
		test('gets correct Route for "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"', () => {
			expect(goPizzaBot("5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"))
			.toBe('DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD');
		});
	});


	describe('checkInputFormat', () => {

        describe('basic checks', () => {
    		test('is not empty string', () => {
				expect(checkInputFormat("")).toBeFalsy();
			});
			test('is not undefined', () => {
				expect(checkInputFormat()).toBeFalsy();
			});
			test('is not missing open brace', () => {
				expect(checkInputFormat("5x5 )")).toBeFalsy();
			});
			test('is not missing close brace', () => {
				expect(checkInputFormat("5x5 (")).toBeFalsy();
			});
		});

		describe('grid check', () => {
			test('has integer in 1st position', () => {
				expect(checkInputFormat("ix5")).toBeFalsy();
			});
			test('has x in 2nd position', () => {
				expect(checkInputFormat("5n5 (1, 3) (4, 4)")).toBeFalsy();
			});
			test('has integer in 3rd position', () => {
				expect(checkInputFormat("5xi (1, 3) (4, 4)")).toBeFalsy();
			});
			test('has space in last position', () => {
				expect(checkInputFormat("5x50 (1, 3) (4, 4)")).toBeFalsy();
			});
		});

		describe('coord check', () => {
            test('accepts correct input with 1 coord', () => {
				expect(checkInputFormat("5x5 (1, 3)")).toBeTruthy();
			});
			test('accepts correct input with more than 1 coord', () => {
				expect(checkInputFormat("5x5 (1, 3) (4, 4)")).toBeTruthy();
			});
			test('has integer in 1st position', () => {
				expect(checkInputFormat("5x5 (m, 3) (4, 4)")).toBeFalsy();
			});
			test('has comma in 2nd position', () => {
				expect(checkInputFormat("5x5 (1x 3) (4, 4)")).toBeFalsy();
			});
			test('has space in 3rd position', () => {
				expect(checkInputFormat("5x5 (1,3) (4, 4)")).toBeFalsy();
			});
			test('has integer in 4th position', () => {
				expect(checkInputFormat("5x5 (1, p) (4, 4)")).toBeFalsy();
			});
			test('has brace in 5th position', () => {
				expect(checkInputFormat("5x5 (1, 3 (4, 4)")).toBeFalsy();
			});
			test('has integer in 6th position', () => {
				expect(checkInputFormat("5x5 (1, 3)(4, 4)")).toBeFalsy();
			});
		});

	});

});











