import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Grow, TextField, Typography } from '@mui/material';
import React from 'react';

function QuizSettings(props) {
    const [quiz, setQuiz] = React.useState({
        questionNo: '',
        maxDigits: '',
        timeLimit: '', // in seconds
        operation: {
            add: false,
            subs: false,
            multi: false,
            div: false,
        }
    });

    const handleSubmit = () => {
        props.onSubmit(quiz);
    }

    return (
        <div style={{ display: props.display }}>
            <Grow in={props.in}>
                <Grid
                    container
                >
                    <Typography variant="h4" gutterBottom component="div" style={{ marginBottom: 50 }}>
                        Quiz Settings
                    </Typography>
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid item xs={4} md={4}>
                            Question No:
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <TextField onChange={(e) => setQuiz({ ...quiz, questionNo: e.target.value })} value={quiz["questionNo"]} fullWidth={true} label="Enter number of question" variant="filled" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            Maximum digits:
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <TextField onChange={(e) => setQuiz({ ...quiz, maxDigits: e.target.value })} value={quiz["maxDigits"]} fullWidth={true} label="Enter maximum digits" variant="filled" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            {"Time Limit (seconds):"}
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <TextField onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }} onChange={(e) => setQuiz({ ...quiz, timeLimit: e.target.value })} value={quiz["timeLimit"]} fullWidth={true} type='number' label="Enter time limit" variant="filled" />
                        </Grid>
                        <Grid item xs={4} md={4}>
                            Operation:
                        </Grid>
                        <Grid item xs={8} md={8}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox onChange={(e) => setQuiz({ ...quiz, operation: { ...quiz["operation"], add: e.target.checked } })} checked={quiz["operation"]["add"]} />} label="Add" />
                                <FormControlLabel control={<Checkbox onChange={(e) => setQuiz({ ...quiz, operation: { ...quiz["operation"], subs: e.target.checked } })} checked={quiz["operation"]["subs"]} />} label="Substract" />
                                <FormControlLabel control={<Checkbox onChange={(e) => setQuiz({ ...quiz, operation: { ...quiz["operation"], multi: e.target.checked } })} checked={quiz["operation"]["multi"]} />} label="Multiply" />
                                <FormControlLabel control={<Checkbox onChange={(e) => setQuiz({ ...quiz, operation: { ...quiz["operation"], div: e.target.checked } })} checked={quiz["operation"]["div"]} />} label="Division" />
                            </FormGroup>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Button style={{ marginTop: 20 }} onClick={handleSubmit} variant="contained">Complete</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grow>
        </div>
    );
}

export default QuizSettings;