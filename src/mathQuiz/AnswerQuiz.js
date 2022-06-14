import { Grid, Grow, Typography, Slide, Box, Button } from '@mui/material';
import React from 'react';
import QuestionAnswer from './QuestionAnswer';

function AnswerQuiz(props) {
    const quiz = props.quiz;

    const [index, setIndex] = React.useState(0);

    const [score, setScore] = React.useState(0);

    const onFinish = (score) => {
        props.onFinish(score);
    }

    const onAnswer = (value) => {
        if (value) {
            setScore(score + 1);
            console.log("score: " + (score + 1));
        }

        console.log("index: " + (index + 1));

        if ((index + 1) === quiz.length) {
            console.log("final score: " + (score + 1));
            onFinish(score + 1);
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
                        10:10
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
            </Grid>
        </Grow >
    );
}

export default AnswerQuiz;