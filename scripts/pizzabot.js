// Javascript ES6
const args = process.argv;
let input=args[2];

function goPizzaBot(input){ //return route
    // check input format
    if(!checkInputFormat(input))
        return 'Pizzabot Error! Check your input, please.';

    // make delivery route
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
            (origX < destX) ? origX++ : origX--;
        }

        while(origY !== destY){
            route += dirY;
            (origY < destY) ? origY++ : origY--;
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

function checkInputFormat(input){
    // check basics
    if(!input || !input.length || input.indexOf('(') < 0 || input.indexOf(')') < 0)
        return false;

    // check 5x5
    let grid=input.slice(0,4).split('');
    for(let i=0; i<grid.length; i++){
        if((i===0 && !Number.isInteger(Number(grid[i])))
          || (i===1 && grid[i] !== 'x')
          || (i===2 && !Number.isInteger(Number(grid[i])))
          || (i===3 && grid[i] !== ' '))
            return false;
    }

    // check coords
    input=input.slice(4);
    if(input[0] !== '(' || input[input.length-1] !== ')')
        return false;

    let openIndex=0;
    for(let i=1; i<input.length; i++){
        if((i===openIndex+1 && !Number.isInteger(Number(input[i])))
          || (i===openIndex+2 && input[i] !== ',')
          || (i===openIndex+3 && input[i] !== ' ')
          || (i===openIndex+4 && !Number.isInteger(Number(input[i])))
          || (i===openIndex+5 && input[i] !== ')')
          || (i===openIndex+6 && input[i] !== ' '))
            return false;

        if(input[i] === '(') { openIndex=i; }
    }

    return true;
}

console.log(goPizzaBot(input));

module.exports = { goPizzaBot, getDeliveries, getDirection, checkInputFormat };