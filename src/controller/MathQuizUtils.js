import React from 'react';

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
        const number1 = Math.floor(Math.random() * (max - min) + min);
        const number2 = Math.floor(Math.random() * (max - min) + min);

        let question = {};

        if (ope[selectedOpeIndex - 1] == "+") {
            question = {
                question: number1 + " + " + number2,
                answer: number1 + number2,
            }
        } else if (ope[selectedOpeIndex - 1] == "-") {
            question = {
                question: number1 + " - " + number2,
                answer: number1 - number2,
            }
        } else if (ope[selectedOpeIndex - 1] == "*") {
            question = {
                question: number1 + " * " + number2,
                answer: number1 * number2,
            }
        } else if (ope[selectedOpeIndex - 1] == "/") {
            question = {
                question: number1 + " / " + number2,
                answer: number1 / number2,
            }
        }

        questionList.push(question);
    }

    console.log(questionList);

    return questionList;
}