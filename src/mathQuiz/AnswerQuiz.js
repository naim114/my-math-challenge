import { Button, Grow, Typography } from '@mui/material';
import React from 'react';


function AnswerQuiz(props) {
    const quiz = props.quiz;
    return (
        <Grow in={true}>
            <Typography>
                {JSON.stringify(quiz)}
            </Typography>
        </Grow>
    );
}

export default AnswerQuiz;