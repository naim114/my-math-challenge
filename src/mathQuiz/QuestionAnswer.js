import { Grid, Grow, Typography, Slide, Box, Button } from '@mui/material';
import AnswerButton from '../component/AnswerButton';

function QuestionAnswer(props) {
    const question = props.question;

    const onAnswer = (value) => {
        props.onAnswer(value);
    }

    return (
        <Slide
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            style={{
                marginTop: 50,
                marginBottom: 50,
            }}
        >
            <div>
                <Typography variant="h1" gutterBottom component="div" style={{ textAlign: 'center' }}>
                    {question["question"]} = ?
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <AnswerButton onClick={() => { onAnswer(question["answer"][0]["isCorrect"]) }} label={question["answer"][0]["text"]} />
                    <AnswerButton onClick={() => { onAnswer(question["answer"][1]["isCorrect"]) }} label={question["answer"][1]["text"]} />
                    <AnswerButton onClick={() => { onAnswer(question["answer"][2]["isCorrect"]) }} label={question["answer"][2]["text"]} />
                    <AnswerButton onClick={() => { onAnswer(question["answer"][3]["isCorrect"]) }} label={question["answer"][3]["text"]} />
                </Grid>
            </div>
        </Slide>
    );
}

export default QuestionAnswer;