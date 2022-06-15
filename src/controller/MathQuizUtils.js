export function generateQuiz(quizSettings) {
    // generate random number to operate
    const max = Math.pow(10, (quizSettings["numDigits"] - 1));
    const min = Math.pow(10, (quizSettings["numDigits"]));

    // fetch all selected operation
    const ope = [];
    if (quizSettings["operation"]["add"]) ope.push('+');
    if (quizSettings["operation"]["subs"]) ope.push('-');
    if (quizSettings["operation"]["multi"]) ope.push('*');
    if (quizSettings["operation"]["div"]) ope.push('/');

    const questionList = [];

    for (let index = 0; index < quizSettings["questionNo"]; index++) {
        const selectedOpeIndex = Math.floor((Math.random() * ope.length) + 1);

        let number1 = getRandomNumber(max, min);
        let number2 = getRandomNumber(max, min);

        if (number2 > number1) {
            console.log("num2 bigger");

            while (number1 < number2) {
                number2 = getRandomNumber(max, min);
            }
        }

        // if (number2 > number1) {
        //     console.log("it dont work");
        // }

        let question = {};

        if (ope[selectedOpeIndex - 1] === "+") {
            const answerList = [];

            answerList.push({ "text": number1 + number2, "isCorrect": true });
            answerList.push({ "text": (number1 + number2) + 3, "isCorrect": false });
            answerList.push({ "text": (number1 + number2) - 2, "isCorrect": false });
            answerList.push({ "text": (number1 + number2) + 5, "isCorrect": false });

            shuffle(answerList);

            question = {
                question: number1 + " + " + number2,
                answer: answerList,
            }
        } else if (ope[selectedOpeIndex - 1] === "-") {
            const answerList = [];

            answerList.push({ "text": number1 - number2, "isCorrect": true });
            answerList.push({ "text": (number1 - number2) + 3, "isCorrect": false });
            answerList.push({ "text": (number1 - number2) - 2, "isCorrect": false });
            answerList.push({ "text": (number1 - number2) + 5, "isCorrect": false });

            shuffle(answerList);

            question = {
                question: number1 + " - " + number2,
                answer: answerList,
            }
        } else if (ope[selectedOpeIndex - 1] === "*") {
            const answerList = [];

            answerList.push({ "text": number1 * number2, "isCorrect": true });
            answerList.push({ "text": (number1 * number2) + 3, "isCorrect": false });
            answerList.push({ "text": (number1 * number2) - 2, "isCorrect": false });
            answerList.push({ "text": (number1 * number2) + 5, "isCorrect": false });

            shuffle(answerList);

            question = {
                question: number1 + " x " + number2,
                answer: answerList,
            }
        } else if (ope[selectedOpeIndex - 1] === "/") {
            const answerList = [];

            answerList.push({ "text": number1 / number2, "isCorrect": true });
            answerList.push({ "text": (number1 / number2) + 3, "isCorrect": false });
            answerList.push({ "text": (number1 / number2) - 2, "isCorrect": false });
            answerList.push({ "text": (number1 / number2) + 5, "isCorrect": false });

            shuffle(answerList);

            question = {
                question: number1 + " ÷ " + number2,
                answer: answerList,
            }
        }

        questionList.push(question);
    }

    console.log("generated question list:\n" + JSON.stringify(questionList));

    return questionList;
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
}

export function generateText(isCorrect) {
    const correct = [
        "Excellent!",
        "Correct!",
        "Good Job!",
        "It is correct!",
        "Awesome!!",
    ]

    const incorrect = [
        "Try again",
        "Incorrect",
        "Wrong",
        "Aww try again :(",
        "Better luck next time",
    ]

    if (isCorrect) {
        return correct[Math.floor(Math.random() * correct.length)];
    } else {
        return incorrect[Math.floor(Math.random() * incorrect.length)];
    }
}