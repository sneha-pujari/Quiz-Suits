const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
console.log("Welcome to the quiz on SUITS");
var score = 0;
const queBank = [
	{
		question: `
	Suits is set in a fictional law firm in ________?
	a: Atlanta
	b: New York
	c: Chicago\n`,
		answer: "b"
	},
	{
		question: `
	Who lands an interview with Harvey Specter after he runs from a drug deal gone bad?
	a: Jack Soloff
	b: Mike Ross
  c: Sean Cahill\n`,
		answer: "b"
	},
	{
		question: `
The firm hires law graduates from ________?
	a: Yale
	b: Columbia
	c: Harvard
	d: Stanford\n`,
		answer: "c"
	},
	{
		question: `
	_____ is the firm's expert on all financial matters?
	a: Robert Zane
	b: Louis Litt
  c: Jeff Malone\n`,
		answer: "b"
	}
];

let questionIndex = 0;

function question() {
	rl.question(queBank[questionIndex].question, (answer) => {
		console.log(`You answered: ${answer}`);

		if (answer.toLowerCase() == queBank[questionIndex].answer.toLowerCase()) {
			console.log("right answer");
			questionIndex++;
      score = score + 1;
			serve();
		} else {
			console.log("wrong answer");
			console.log("try again");
			question();
      score = score - 1;
		}
	});
}

function serve() {
 
	if (isQuestionBankExhausted()) {
		console.log("Thanks for playing! Hope you enjoyed!");
        console.log("Final score: ", score);
		rl.close();
	} else {
    
		rl.question("what do you want to do? \n Press e to exit, any other key to continue.", (choice) => {
			console.log(`You selected ${choice}`);

			if (choice.toLowerCase() !== "e") {
				question();
			} else {
				console.log("Thanks for playing! Hope you enjoyed!");
        console.log("Final score: ", score);
				rl.close();
			}
		});
	}
}

/**
 * checks array length with index and exits game
 */
function isQuestionBankExhausted() {
	if (queBank.length == questionIndex) {
		return true;
	}
}

serve();
