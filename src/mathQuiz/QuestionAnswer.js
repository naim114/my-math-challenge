import { Grid, Typography, Slide } from '@mui/material';
import AnswerButton from '../component/AnswerButton';

function QuestionAnswer(props) {
    const question = props.question;

    const onAnswer = (value) => {
        const answerList = question["answer"];
        let correctAnswer = 0;

        for (let index = 0; index < answerList.length; index++) {
            if (answerList[index]["isCorrect"] === true) {
                console.log("Correct answer is " + answerList[index]["text"]);
                correctAnswer = answerList[index]["text"];
            }
        }

        props.onAnswer(value, correctAnswer);
    }

    return (
        <Slide
            direction="up"
            in={true}
            mountOnEnter
            unmountOnExit
            style={{
                marginTop: 40,
                marginBottom: 20,
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