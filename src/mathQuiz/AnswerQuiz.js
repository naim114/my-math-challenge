import { Grid, Grow, Typography, Box } from '@mui/material';
import React from 'react';
import { generateText } from '../controller/MathQuizUtils';
import QuestionAnswer from './QuestionAnswer';

function AnswerQuiz(props) {
    const quiz = props.quiz;

    const [index, setIndex] = React.useState(0);

    const [score, setScore] = React.useState(0);

    const [isCorrect, setIsCorrect] = React.useState(null);

    const [text, setText] = React.useState("");

    const onFinish = (score, length) => {
        props.onFinish(score, length);
    }

    const onAnswer = (value) => {
        console.log("result: " + value);

        if (value) {
            setScore(score + 1);
            console.log("score: " + (score + 1));
            setIsCorrect(true);
            setText(generateText(value));
        } else {
            setIsCorrect(false);
            setText(generateText(value));
        }

        console.log("index: " + (index + 1));

        if ((index + 1) === quiz.length) {
            if (value) {
                console.log("final score: " + (score + 1));
                console.log("og length: " + quiz.length);
                onFinish(score + 1, quiz.length);
            } else {
                console.log("final score: " + (score));
                console.log("og length: " + quiz.length);
                onFinish(score, quiz.length);
            }
        } else {
            setIndex(index + 1);
        }
    }


    return (
        <Grow in={true}>
            <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Box
                        style={{
                            backgroundColor: '#1a2027',
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingRight: 20,
                            paddingLeft: 20,
                            borderRadius: 30,
                            fontSize: 25,
                            color: 'white',
                        }}
                    >
                        Score: {score}
                    </Box>
                    <Typography
                        style={{
                            fontSize: 20,
                        }}
                    >
                        Question {index + 1} out of {quiz.length}
                    </Typography>
                </Grid>
                <QuestionAnswer question={quiz[index]} onAnswer={onAnswer} />
                {
                    isCorrect === null
                        ?
                        <span></span>
                        : <Typography
                            style={{
                                fontSize: 30,
                                fontWeight: 'bold',
                                color: isCorrect ? 'green' : 'red',
                            }}
                        >
                            {text}
                        </Typography>
                }
            </Grid>
        </Grow >
    );
}

export default AnswerQuiz;