const { PizzaBot } = require('./pizzabot_oop');

var pizzabot;
var input;

describe('PizzaBot Tests', () => {

    describe('PizzaBot Class', () => {
        test('adds name', () => {
            let pizzabot = new PizzaBot('Pizzamia');
            expect(pizzabot.name).toBe('Pizzamia');
        });
        test('creates name', () => {
            let pizzabot = new PizzaBot();
            expect(pizzabot.name).toBe('Pizzabotti');
        });
        test('has grid', () => {
            let pizzabot = new PizzaBot();
            expect(pizzabot.grid).toBe('');
        });
        test('has deliveries', () => {
            let pizzabot = new PizzaBot();
            expect(pizzabot.deliveries).toBe('');
        });
        test('has route', () => {
            let pizzabot = new PizzaBot();
            expect(pizzabot.route).toBe('');
        });
    });

    describe('Deliveries', () => {
        test('sets grid', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            expect(pizzabot.grid).toBe('5');
        });
        test('sets deliveries', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            expect(pizzabot.deliveries).toEqual([ [ 1, 3 ], [ 4, 4 ] ]);
        });
        test('parses deliveries', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            expect(pizzabot.parseDeliveries(input)).toEqual([ [ 1, 3 ], [ 4, 4 ] ]);
        });
        test('gets deliveries', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            expect(pizzabot.getDeliveries()).toEqual([ [ 1, 3 ], [ 4, 4 ] ]);
        });
    });

    describe('Routes', () => {
        test('sets route', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            pizzabot.setRoute();
            expect(pizzabot.route).toBe('ENNNDEEEND');
        });
        test('gets route', () => {
            pizzabot = new PizzaBot();
            input = "5x5 (1, 3) (4, 4)";
            pizzabot.setDeliveries(input);
            pizzabot.setRoute();
            expect(pizzabot.getRoute()).toBe('ENNNDEEEND');
        });
    });

    describe('Compass Direction', () => {
        pizzabot = new PizzaBot();
        test('gets Direction for Up', () => {
            expect(pizzabot.getDirection('y',0,1)).toBe('N');
        });
        test('gets Direction for Down', () => {
            expect(pizzabot.getDirection('y',1,0)).toBe('S');
        });
        test('gets Direction for Left', () => {
            expect(pizzabot.getDirection('x',1,0)).toBe('W');
        });
        test('gets Direction for Right', () => {
            expect(pizzabot.getDirection('x',0,1)).toBe('E');
        });
    });

    describe('Input Formats', () => {
        pizzabot = new PizzaBot();

        describe('basic checks', () => {
            test('is not empty string', () => {
                expect(pizzabot.checkInputFormat("")).toBeFalsy();
            });
            test('is not undefined', () => {
                expect(pizzabot.checkInputFormat()).toBeFalsy();
            });
            test('is not missing open brace', () => {
                expect(pizzabot.checkInputFormat("5x5 )")).toBeFalsy();
            });
            test('is not missing close brace', () => {
                expect(pizzabot.checkInputFormat("5x5 (")).toBeFalsy();
            });
        });

        describe('grid check', () => {
            test('has integer in 1st position', () => {
                expect(pizzabot.checkInputFormat("ix5")).toBeFalsy();
            });
            test('has x in 2nd position', () => {
                expect(pizzabot.checkInputFormat("5n5 (1, 3) (4, 4)")).toBeFalsy();
            });
            test('has integer in 3rd position', () => {
                expect(pizzabot.checkInputFormat("5xi (1, 3) (4, 4)")).toBeFalsy();
            });
            test('has space in last position', () => {
                expect(pizzabot.checkInputFormat("5x50 (1, 3) (4, 4)")).toBeFalsy();
            });
        });

        describe('coord check', () => {
            test('accepts correct input with 1 coord', () => {
                expect(pizzabot.checkInputFormat("5x5 (1, 3)")).toBeTruthy();
            });
            test('accepts correct input with more than 1 coord', () => {
                expect(pizzabot.checkInputFormat("5x5 (1, 3) (4, 4)")).toBeTruthy();
            });
            test('has integer in 1st position', () => {
                expect(pizzabot.checkInputFormat("5x5 (m, 3) (4, 4)")).toBeFalsy();
            });
            test('has comma in 2nd position', () => {
                expect(pizzabot.checkInputFormat("5x5 (1x 3) (4, 4)")).toBeFalsy();
            });
            test('has space in 3rd position', () => {
                expect(pizzabot.checkInputFormat("5x5 (1,3) (4, 4)")).toBeFalsy();
            });
            test('has integer in 4th position', () => {
                expect(pizzabot.checkInputFormat("5x5 (1, p) (4, 4)")).toBeFalsy();
            });
            test('has brace in 5th position', () => {
                expect(pizzabot.checkInputFormat("5x5 (1, 3 (4, 4)")).toBeFalsy();
            });
            test('has integer in 6th position', () => {
                expect(pizzabot.checkInputFormat("5x5 (1, 3)(4, 4)")).toBeFalsy();
            });
        });
    });

});











