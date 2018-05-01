# Pizza Bot
Pizzabot gets a list of houses to deliver pizzas to! Yum, pizza! (Javascript ES6) 

https://github.com/AliceWonderland/Pizza-Bot.git

### Installation
Install [NPM v5.6.0+ and Node v8.9.4+](https://nodejs.org/en/download/)

Open Command Line Terminal:
* Create directory for files `mkdir my-dir`, browse to directory `cd my-dir`
* Clone down Git Repo `git clone https://github.com/AliceWonderland/Pizza-Bot.git`.
* Or unpack these files [pizzabot.tar.gz](https://github.com/AliceWonderland/Pizza-Bot/blob/master/assets/pizzabot.tar.gz)
* Browse to `Pizza-Bot` folder.
* Install packages using NPM `npm install`
* Run tests using Jest `npm run test`
* Run manually `node pizzabot.js "5x5 (1, 3) (4, 4)"`

### Files
In the `scripts` folder:
* `pizzabot.js` + `pizzabot.test.js` pizzabot regular
* `pizzabot_oop.js` + `pizzabot_oop.test.js` pizzabot in oop

In the root folder:
* `package.json` contains list of scripts

### Tools & Technologies
* Language: Javascript ES6 https://developer.mozilla.org/en-US/docs/Web/JavaScript
* Environment: Node https://nodejs.org
* Package Manager: NPM https://www.npmjs.com/
* Test Suite: Jest https://facebook.github.io/jest/en/

### Example Command Line Scripts
See `package.json` for ready-made scripts
* `npm run pizzabot "5x5 (1, 3) (4, 4)"` runs pizzabot.js
* `npm run pizzabot-oop "5x5 (1, 3) (4, 4)"` runs pizzabot_oop.js
* `npm run tests` runs all tests
* `npm run test` runs pizzabot.js test
* `npm run test--oop` runs pizzabot_oop.js test
* `node pizzabot.js "5x5 (1, 3) (4, 4)"`

### To Tar and Untar
* Tar `tar -czvf your-stuff.tar.gz your-stuff`
* Untar `tar -zxvf your-stuff.tar.gz`