import { Grid, Grow, Typography, Box, Button, Zoom } from '@mui/material';
import React from 'react';
import { generateGIF, generateText } from '../controller/MathQuizUtils';
import QuestionAnswer from './QuestionAnswer';

function AnswerQuiz(props) {
    const quiz = props.quiz;

    const [index, setIndex] = React.useState(0);

    const [score, setScore] = React.useState(0);

    const [isCorrect, setIsCorrect] = React.useState(null);

    const [text, setText] = React.useState("");

    const [gif, setGif] = React.useState("");

    const [btnVisible, setButtonVisible] = React.useState(false);

    const [answer, setAnswer] = React.useState(0);

    const onFinish = (score, length) => {
        props.onFinish(score, length);
    }

    const onAnswer = (value, onAnswer) => {
        console.log("result: " + value);

        setAnswer(onAnswer);

        if (value) {
            setScore(score + 1);
            console.log("score: " + (score + 1));
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }

        setText(generateText(value));
        setGif(generateGIF(value));
        setButtonVisible(true);
    }

    const goToNextQ = () => {
        setText(null);
        setGif(null);
        setButtonVisible(false);

        console.log("index: " + (index + 1));

        if ((index + 1) === quiz.length) {
            if (isCorrect) {
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
                style={{
                    width: '100%'
                }}
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
                            textAlign: 'center',
                        }}
                    >
                        Score: {score}
                    </Box>
                    <Typography
                        style={{
                            fontSize: 20,
                            textAlign: 'center',
                        }}
                    >
                        Question {index + 1} out of {quiz.length}
                    </Typography>
                </Grid>
                {
                    btnVisible
                        ?
                        <Zoom in={true}>
                            <div>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{
                                        marginBottom: 10,
                                        marginTop: 20,
                                    }}
                                >
                                    <Typography
                                        variant="h3"
                                        style={{
                                            fontWeight: 'bold',
                                            color: isCorrect ? 'green' : 'red',
                                            textAlign: 'center',
                                            marginBottom: 10,
                                        }}
                                    >
                                        {text}
                                    </Typography>
                                    <Typography
                                        variant="h4"
                                        style={{
                                            fontWeight: 'bold',
                                            color: isCorrect ? 'green' : 'red',
                                            textAlign: 'center',
                                            marginBottom: 10,
                                        }}
                                    >
                                        {quiz[index]["question"]} = {answer}
                                    </Typography>
                                    <img
                                        src={gif}
                                        alt="loading..."
                                        style={{
                                            width: '40vw',
                                            margin: 5,
                                        }}
                                    />
                                    <Button
                                        style={{
                                            paddingTop: 15,
                                            paddingBottom: 15,
                                            paddingLeft: 20,
                                            paddingRight: 20,
                                            fontSize: 20,
                                            margin: 10
                                        }}
                                        onClick={goToNextQ}
                                        variant="contained"
                                    >
                                        Next
                                    </Button>
                                </Grid>

                            </div>
                        </Zoom>
                        : <QuestionAnswer question={quiz[index]} onAnswer={onAnswer} />
                }
            </Grid>
        </Grow >
    );
}

export default AnswerQuiz;